import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IEleve} from '../../../../shared/model/eleve';
import {EleveService} from '../../eleve.service';

@Component({
  selector: 'app-update-image-modal',
  templateUrl: './update-image-modal.component.html',
  styleUrls: ['./update-image-modal.component.scss']
})
export class UpdateImageModalComponent implements OnInit {
  selectedFile: File;


  constructor(public dialogRef: MatDialogRef<UpdateImageModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private eleveService: EleveService) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => this.data.eleve.photo = reader.result;
    reader.readAsDataURL(file);
  }


  onUpload() {
    // TODO implements when back ready
    this.eleveService.uploadPicture(this.data.eleve.id, this.selectedFile).subscribe(reponse => {
      console.log(reponse);
    });
  }

}
