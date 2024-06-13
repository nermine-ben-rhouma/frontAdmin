import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterielService } from '../materiel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Picture } from 'src/app/gestionRandonnee/randonnee';
import { RandomService } from 'src/app/gestionRandonnee/randonnee.service';

@Component({
  selector: 'app-materiel-update',
  templateUrl: './materiel-update.component.html',
  styleUrls: ['./materiel-update.component.css']
})

export class MaterielUpdateComponent {
  materielId: number=0;
  form:FormGroup
  showError = false;
  show = false;
  message = '';
  pictureArray: Picture[] = [];
  allpicture: Picture = new Picture();
  pictureString: Picture = new Picture();
  desableDefCheck: boolean=false;
  alert: string='';
  tailleInvalid: boolean=false;
  filesize: number=0;
  filename: string='';
  materiel:any
 constructor (private route: ActivatedRoute, private materielService: MaterielService,private fb: FormBuilder,  private router: Router,private randonneeService: RandomService) {
  this.form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    price: [0, Validators.required]
  });
  }

  ngOnInit(): void {
  
    this.route.params.subscribe(params => {
      this.materielId = +params['id']; 
   this.LoadDataMateriel( this.materielId)
 
    });
}
LoadDataMateriel(id:number){
  this.materielService.getMateriel(id).subscribe(data=>{
    this.materiel=data
    console.log(data)
    this.form.patchValue(this.materiel)
    this.pictureArray=this.materiel.pictures
  })
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
  this.allpicture= new Picture()
  this.allpicture.url = await e.target.result;
  this.allpicture.defaults = await false
  await this.pictureArray.push(this.allpicture)
  console.log(' this.pictureArray', this.pictureArray)
  const found = await this.pictureArray.filter(item => item.defaults === true);

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
    this.materielService.updateMateriel(this.materielId,this.form.value).subscribe(
      (response) => {
        this.pictureArray.forEach(async (picture: Picture) => {
          picture. materielId= response.id
          await this.randonneeService.addPicture(picture)
            .subscribe(
              picture => {
                console.log("picture",picture)
               
               
              })
              this.show=true
              this.message="Materiel ete crée avec success"
              this.pictureArray=[]
              this.form.reset()
        })
        this.show = true;
        this.showError = false;
        this.message = 'Materiel ajouté avec succès!';
        this.form.reset();
        setTimeout(() => this.router.navigate(['/materiel']), 2000);
      },
      (error) => {
        this.showError = true;
        this.show = false;
        this.message = 'Erreur lors de l\'ajout du materiel.';
      }
    );
  }
}
}


