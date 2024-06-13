import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RandomService } from '../randonnee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Picture, Randonnee, RandonneeDetail } from '../randonnee';
import { ActivityService } from 'src/app/activity/aactivity.service';
import { CircuitService } from 'src/app/gestionCricuit/circuit.service';

@Component({
  selector: 'app-update-randonnee',
  templateUrl: './update-randonnee.component.html',
  styleUrls: ['./update-randonnee.component.css']
})
export class UpdateRandonneeComponent implements OnInit {

  form: FormGroup;
  pictureArray: Picture[] = [];
  allpicture: Picture = new Picture();
  pictureString: Picture = new Picture();
  filename: string='';
  pictureIndex: number = -1;
  desableDefCheck: boolean=false;
  isPictureChecked: boolean=false;
  pictureDetails: boolean=false;
  untouched: boolean = true;
  filesize: number=0;
  loading: boolean = false;
  saisie: string='';
  tailleInvalid: boolean=false;
  alert:string=''
  PrincipalCheck:boolean=false
  showError: boolean=false;
  errorMessage: string='';
  showAlert: boolean=false;
  activities: any;
  show:boolean=false
  message:string=''
  activitie: any[]=[];
  circuits: any[]=[];
  circuites:any= [];
  randonneeDetails:RandonneeDetail[]= []
  randonneeDetail:RandonneeDetail= new RandonneeDetail()
  randonnee: any;
  randonneeId: number=0;
  constructor(private fb: FormBuilder ,private randonneeService: RandomService, private activityService: ActivityService,private activatedRoute:ActivatedRoute,
    private  circuitService: CircuitService){
    this.form = this.fb.group({
      titre: ['',Validators.required],
      description:['',Validators.required],
      date: ['',Validators.required],
      duree: ['',Validators.required],
      denivele: ['',Validators.required],
      difficulte: ['',Validators.required],
      distance: ['',Validators.required],
      picture: ['',Validators.required],
      nomber_de_participant:['',Validators.required],
      prix:['',Validators.required],
  
    });
  }
  ngOnInit(): void {
    this.getAllactivity()
    this.getAllCircuit()
    this.activatedRoute.params.subscribe((params: Params) => {
      this.randonneeId = +params['id'];
      this. getRandonneebyId(this.randonneeId)

    })
  }
  getRandonneebyId(id:number){
    this.randonneeService.getRandomById(id).subscribe(data=>{
      this.randonnee=data
      this.pictureArray=this.randonnee.pictures
this.form.patchValue(data)

    })
  }
  getAllactivity()
{
  this.activityService.getAllActivities().subscribe(data=>{
    console.log('data',data)
    this.activities=data
    console.log(this.activities)
  })
}
openChange(open: any) {
console.log(open)
this.randonneeDetail.activity=open.model
this.activitie.push(open.model)
this.randonneeDetails.push(this.randonneeDetail)
this.randonneeDetail =new RandonneeDetail()
}

getAllCircuit()
{
  this.circuitService.findAll().subscribe((data:any)=>{
    console.log('data',data[0])
    this.circuits=data[0]

  })
}
openChangeCircuit(open: any) {
  this.randonneeDetail.circuits=open.model
this.circuites.push(open.model)
  

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
  // pictureDetailAction(item: Picture, index: number) {
  //   this.PrincipalCheck =this.pictureArray[index].defaults
  //   this.detailIdReserve = this.pictureArray[index].detailId 
  //   if (this.untouched) {
  //     this.pictureString = item
  //     this.pictureDetails = true
  //     this.pictureIndex = index
  //     if (this.pictureArray.length == 1) {
  //       this.desableDefCheck = true
  //     }
  //     if (this.pictureString.defaults == true) {
  //       this.isPictureChecked = true
  //     } else {
  //       this.isPictureChecked = false
  //     }
  //   }
  // }

  // You can use the form like this
  onSubmit() {
 
    let randonnee= new Randonnee()
    randonnee.titre = this.form.value?.titre;
    randonnee.description = this.form.value?.description;
    randonnee.date = this.form.value?.date;
    randonnee.duree = this.form.value?.duree;
    randonnee.denivele = this.form.value?.denivele;
    randonnee.difficulte = this.form.value?.difficulte;
    randonnee.distance = this.form.value?.distance;
    randonnee.picture=this.pictureArray[0].url
    randonnee.prix=this.form.value?.prix
    randonnee.nomber_de_participant=this.form.value?.nomber_de_participant
    console.log('hajer')
    // randonnee.pictures = this.picture[0]ay
    this.randonneeService.updateRandom(this.randonneeId,randonnee).subscribe(
      response => {
    console.log(randonnee)
        this.show = true; 
        this.message="votre  Randonnée étè crée avec scuccess "
        this.pictureArray.forEach(async picture => {
          picture.randonneeId = response.id
          await this.randonneeService.addPicture(picture)
            .subscribe(
              picture => {
                console.log("picture",picture)
                this.showAlert = true;
              })
        })
        // Reset the form after successful submission
        this.form.reset();
        // Optionally, you can navigate to another page or show a success message
      },
      error => {
        console.error('Error creating randonnee:', error);
        // Display error message
        this.showError = true;
        this.errorMessage = 'Failed to create randonnee. Please try again.';
      }
    );
  
  

  // Access form values


}


}
