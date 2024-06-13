import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgencyService } from '../agency.service';
import { Picture } from 'src/app/gestionRandonnee/randonnee';
import { RandomService } from 'src/app/gestionRandonnee/randonnee.service';

@Component({
  selector: 'app-add-agncy',
  templateUrl: './add-agncy.component.html',
  styleUrls: ['./add-agncy.component.css']
})
export class AddAgncyComponent {
  form: FormGroup;
  show: boolean = false;
  message: string = '';
  showError: boolean = false;
  pictureArray: any=[];
  desableDefCheck: boolean=false;
  filename: string='';
  filesize: number=0;
  tailleInvalid: boolean=false;
  alert: string='';
  ngOnInit(): void {
    
  }


  constructor(private fb: FormBuilder, private agencyService: AgencyService,private randonneeService: RandomService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      activity: ['', Validators.required],
      description: ['', Validators.required],
      adresse: [''],
      codePostal: [''],
      city: [''],
      coordonnees: [''], // or separate form controls for latitude and longitude
      telephone: [''],
      email: ['',Validators.email],
      password: ['',Validators.required],
        });
  }

  picked(event:any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.filename = file.name;
      this.filesize = file.size;
      if (this.filesize > 100000) {
        this.tailleInvalid = true;
        return
      }
      this.tailleInvalid = false;
      this.handleInputChange(file);
    }
    else {
      alert("No file selected");
    }
  }
  
  handleInputChange(files:File) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      this.alert = "format d'image invalide "
      // { type: 'danger', message: "format d'image invalide " };
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  
  async _handleReaderLoaded(e:any) {
    let allpicture: Picture = new Picture()
    allpicture.url = await e.target.result;
    allpicture.defaults = await false
    await this.pictureArray.push(allpicture)
    console.log(' this.pictureArray', this.pictureArray)
    const found = await this.pictureArray.filter((item: { defaults: boolean; }) => item.defaults === true);
    if (found.length == 0) {
      this.pictureArray[0].defaults = await true
    }
    this.desableDefCheck = false
  }

  async deletePicAction(item:any) {
    var pos = await this.pictureArray.indexOf(item);
    await this.pictureArray.splice(pos, 1);
    if (item.defaults == true) {
      this.pictureArray[0].defaults = await true
    }
  }
  onSubmit(): void {
    if (this.form.valid) {
      this.agencyService.addAgency(this.form.value).subscribe(
        (response) => {
          this.pictureArray.forEach(async (picture: Picture) => {
            picture. agencyId= response.id
            await this.randonneeService.addPicture(picture)
              .subscribe(
                picture => {
                  console.log("picture",picture)
                 
                 
                })
                this.show=true
                this.message="Agence ete crée avec success"
                this.pictureArray=[]
                this.form.reset()
          })
          this.show = true;
          this.showError = false;
          this.message = 'Agence ajouté avec succès!';
          this.form.reset();
          // setTimeout(() => this.router.navigate(['/materiel']), 2000);
        },
        (error:any) => {
          this.showError = true;
          this.show = false;
          this.message = 'Erreur lors de l\'ajout du materiel.';
        }
      );
    }
  }
}
