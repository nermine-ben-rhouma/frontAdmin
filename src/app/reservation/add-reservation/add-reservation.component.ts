import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { RandomService } from 'src/app/gestionRandonnee/randonnee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';

import { ClientService } from 'src/app/gestoinClient/client.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit{
  
  formGroup: FormGroup;
  randonnee:any
  randonneeList:any
  userList: any=[];
  selection: any[] = [];
  states=[{"value":1},{"value":2},{"value":3},{"value":4},{"value":5}]
  show:boolean=false
  showError:boolean=false
  message:string=''
  reservation: Reservation = new Reservation()
  constructor(private reservationService: ReservationService,private  randomService: RandomService ,private clientService: ClientService,private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      id: [null], // Set initial value to null for auto-generated ID
      dateReservation: ['', Validators.required],
      prix: ['', Validators.required],
      nombreParticipation: ['', [Validators.required, Validators.min(1) ,Validators.max(4)]],
      userId: ['', Validators.required],
      randonneeId: ['', Validators.required],
      selection: ['', Validators.required],
      // commentaire: [''] // Optional comment field (uncomment if needed)
    });
  }
  ngOnInit(): void {
    this.randomService.getAllRandoms().subscribe(data=>{
      this.randonneeList=data[0]
      console.log(this.randonneeList)
      
    })
     this.clientService.findAll().subscribe((dataUsre:any)=>{
    console.log('userData',dataUsre[0])
    this.userList=dataUsre[0]
     })

  }
   onchange(event:any){
  //   let place =this.formGroup?.value('nombreParticipation')
  //   let randonee=this.formGroup.value('randonneeId')
  //   console.log('randonee',randonee,place)
  //   this.setPrice()
  //  }
  let nombreParticipation = this.formGroup.value?.nombreParticipation
  let randonnee=this.formGroup.value?.randonee

// Access randonneeId value directly without checking existence (assuming it exists)
let randonneeId = this.formGroup.value('randonneeId');

console.log('randonee', randonneeId);
   }
  
  
  nSelectionChange(event:any){
    console.log(this.formGroup)

  }
  openChange(open: any) {
    
    this.reservation.clientId=open.model
    }
    
    openChangeRandonnee(open: any) {
      console.log("randonn",open)
      this.reservation.randonneeId=open.model
      }
      openChangePersonne(open: any) {
    
        console.log("openn",open.model.value)
        this.reservation.nombreParticipation=Number(open.model.value)
        let nombreParticipation = this.formGroup.value?.nombreParticipation
        console.log(this.reservation.nombreParticipation,this.reservation.randonneeId?.prix)
        let price=  Number(this.reservation.nombreParticipation)*Number(this.reservation.randonneeId?.prix)
        this.setPrice(price)
        }
    setPrice(price: number) {
          this.formGroup.get('prix')?.setValue(price);
        }
  onSubmit(){  
    this.reservation.randonneeId=  this.reservation.randonneeId
   this.reservation.prix=this.formGroup.value.prix
 console.log(" this.reservation",this.reservation)
this.reservationService.createReservation(this.reservation).subscribe(data=>{
  this.show=true
  this.message=" reservation étè creé avec success"
  const  resetContent = `<div class="text-center" style='width:650px;font-family:Open-sans,sans-serif;font-size:13px;line-height:18px;margin:auto;'>
  <table style='width:100%;margin-top:10px'>
    <tbody>
      <tr>
        <td style='width:20px;padding:7px 0'>&nbsp;</td>
        <td align='center' style='padding:7px 0'>
          <table style='width:100%'>
            <tbody>
              <tr>
                <td align='center' style="border-bottom:4px solid #333333;padding:7px 0;">
                  <a title="Randonnée" href="https://your-randonnée-site.com" target='_blank'>
                    <img src="https://your-randonnée-site.com/logo.png" style="margin-left: 50%; padding-bottom:100px;" alt="Randonnée" class='CToWUd'>
                  </a>
                </td>
              </tr>
              <tr>
                <td align='center' style='padding:7px 0'>
                  <font size='2' face='Open-sans, sans-serif'>
                    <span style='font-weight:500;font-size:28px;text-transform:uppercase;line-height:33px'> Bonjour, </span><br>
                    <span style='font-weight:500;font-size:16px;line-height:25px'>
                      <p>Nous avons reçu votre réservation pour la randonnée. Voici les détails de votre réservation :</p>
                      <ul style="text-align: left;">
              
                        <li>Prix: ${this.formGroup.value?.prix} €</li>
                        <li>Nombre de participants: ${this.formGroup.value?.nombreParticipation}</li>
                        <li>Randonnée ID: ${this.formGroup.value?.randonneeId?.id}</li>
                      </ul>
                    </span>
                  </font>
                </td>
              </tr>
              <tr>
                <td style='padding:0!important'>&nbsp;</td>
              </tr>
              <tr>
                <td style='border:1px solid #d6d4d4;padding:7px 0'>
                  <table style='width:100%'>
                    <tbody>
                      <tr>
                        <td width='10' style='padding:7px 0'>&nbsp;</td>
                        <td style='padding:7px 0'>
                          <font size='2' face='Open-sans, sans-serif'>
                            <p style='margin:3px 0 7px;font-size:18px;padding-bottom:10px'>Merci pour votre réservation. Si vous avez des questions, n'hésitez pas à nous contacter.</p>
                            <p style="font-size:18px;">À bientôt pour une belle randonnée !</p>
                          </font>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;

    const emailData = {
      from: 'your-email@example.com', // Replace with actual sender email
      to: this.reservation.clientId?.username, // Replace with actual recipient email
      subject: 'Réinitialisation de mot de passe IOC',
      content: resetContent
    };

    // this.reservationService.sendEmail(emailData).subscribe(response => {
    //   console.log('Email sent successfully', response);
    // }, error => {
    //   console.error('Error sending email', error);
    // });
})


  }
}
