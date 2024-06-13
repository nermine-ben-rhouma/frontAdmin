import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../bolg-service.service';
import { Picture } from 'src/app/gestionRandonnee/randonnee';
import { Blog } from '../bolg';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bolg-update',
  templateUrl: './bolg-update.component.html',
  styleUrls: ['./bolg-update.component.css']
})
export class BolgUpdateComponent {
  form: FormGroup;
  blog: Blog;
  blogs: any[] = [];
  showError: boolean = false;
  message: string = '';
  show: boolean=false;
  pictureArray: Picture[] = [];
  allpicture: Picture = new Picture();
  pictureString: Picture = new Picture();
  desableDefCheck: boolean=false;
  alert: string='';
  tailleInvalid: boolean=false;
  filesize: number=0;
  filename: string='';
  bolgId: number=0;
  bolg: any;

  constructor(private fb: FormBuilder, private blogService: BlogService,private route: ActivatedRoute) {
    this.blog = new Blog();
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bolgId = +params['id']; 
   this.LoadDataBolg( this.bolgId)
 
    });
  }
  LoadDataBolg(id:number){
    this.blogService.getBlogById(id).subscribe(data=>{
      this.bolg=data
      console.log(data)
      this.form.patchValue(this.bolg)
      this.pictureArray[0]=this.bolg.urlImage
    })
  }
  
  picked(event:any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.filename = file.name;
      this.filesize = file.size;
      if (this.filesize > 10000000) {
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
   
      let bolg :Blog= new Blog()
      bolg.title=this.form?.value?.title
      bolg.description=this.form?.value.description
      bolg.urlImage=this.pictureArray[0].url
       console.log(bolg.urlImage)


      this.blogService.updateBlog(this.bolgId,bolg).subscribe(
        (        response: any) => {
          console.log(response);
          this.form.reset();
          this.show = true;
          this.message = ' bolg étè modifée avec success ';
        },
        (        error: any) => {
          console.error(error);
         
        }
      );
    } 
}
