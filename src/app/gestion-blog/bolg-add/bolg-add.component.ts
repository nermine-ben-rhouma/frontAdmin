import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../bolg-service.service';
import { Picture } from 'src/app/gestionRandonnee/randonnee';
import { Blog } from '../bolg';

@Component({
  selector: 'app-bolg-add',
  templateUrl: './bolg-add.component.html',
  styleUrls: ['./bolg-add.component.css']
})
export class BolgAddComponent {
  form: FormGroup;
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

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs(): void {
    this.blogService.getAllBlogs().subscribe(
      (      response: any[]) => {
        this.blogs = response;
      },
      (      error: any) => {
        console.error(error);
        this.showError = true;
        this.message = 'An error occurred while fetching blogs.';
      }
    );
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


      this.blogService.createBlog(bolg).subscribe(
        (        response: any) => {
          console.log(response);
          this.form.reset();
          this.getAllBlogs();
          this.show = true;
          this.message = ' bolg étè crée avec success ';
        },
        (        error: any) => {
          console.error(error);
         
        }
      );
    } 
  }
    
  
