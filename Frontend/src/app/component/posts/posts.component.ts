import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PostsService} from '../../services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  messageClass;
    message;
    newPost = false;
    loadingpost = false;
    form;
    commentForm;
    processing = false;
    username;
    postPosts;
    newComment = [];
    enabledComments = [];
  
    constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private postservice: PostsService
    ) {
      this.createNewpostForm(); 
      this.createCommentForm(); 
    }
  
    createNewpostForm() {
      this.form = this.formBuilder.group({
         title: ['', Validators.compose([Validators.required,Validators.maxLength(50),Validators.minLength(5),
        ])],
        body: ['', Validators.compose([Validators.required,Validators.maxLength(500),Validators.minLength(5)
        ])]
      })
    }
  
    createCommentForm() {
      this.commentForm = this.formBuilder.group({
        comment: ['', Validators.compose([Validators.required,Validators.minLength(1),Validators.maxLength(200)
        ])]
      })
    }
  
    enableCommentForm() {
      this.commentForm.get('comment').enable(); 
    }
  
    disableCommentForm() {
      this.commentForm.get('comment').disable(); 
    }
  
    enableFormNewpostForm() {
      this.form.get('title').enable(); 
      this.form.get('body').enable(); 
    }
  
    disableFormNewpostForm() {
      this.form.get('title').disable(); 
      this.form.get('body').disable(); 
    }
    
    newpostForm() {
      this.newPost = true; 
        }
    
    draftComment(id) {
      this.commentForm.reset(); 
      this.newComment = []; 
    }

    onpostSubmit() {
      this.processing = true; 
      this.disableFormNewpostForm();   
      const post = {
        title: this.form.get('title').value, 
        body: this.form.get('body').value, 
        userID: this.username 
      }
  
      this.postservice.newpost(post).subscribe(data => {
        if (!data.success) {
          this.messageClass = 'alert alert-danger'; 
          this.message = data.message; 
          this.processing = false; 
          this.enableFormNewpostForm(); 
        } else {
          this.messageClass = 'alert alert-success'; 
          this.message = data.message; 
         // this.getAllpost();
          
        }
      });
    }
  
    goBack() {
      window.location.reload(); 
    }
  
    getAllpost(data) {
      this.postservice.getAllpost(data).subscribe(data => {
        this.postPosts = data['post'];

        
      });
    }
  
  
    expand(id) {
      this.enabledComments.push(id); 
    }
  
    collapse(id) {
      const index = this.enabledComments.indexOf(id); 
      this.enabledComments.splice(index, 1); 
    }
  
    ngOnInit() {
      // // Get profile username on page load
      // this.authService.getProfile().subscribe(profile => {
      //   this.username = profile.user.username; 
      // });
  
      // this.getAllpost(post); 
    }
  
  }
  


















//   constructor( private fb: FormBuilder,
//     private postservice :PostsService ,
//     ){ 
//       // this.createNewposts();
//      }

//      messageClass;
//      message;
//      newPosts = false;
//      loadingPosts = false;
//    processing = false;
//      Form: FormGroup;

//      ngOnInit(): void {
//       this.Form = this.fb.group({
//         title: new FormControl(null, [Validators.required]),
//         body: new FormControl(null, [Validators.required]),

//       });
  
//     }
  

//   onPostsSubmit(){
//     console.log("form submitted");
//     this.postservice.usersPost(this.Form.value).subscribe(res => {
//       console.log(res);
//     })

//     }
  


// // createNewposts(){
// //   this.forms = this.fb.group({
// //     title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
// //     body: new FormControl('', [Validators.required, Validators.maxLength(500)]),
 

// //   })
// // }
//    newPostsform(){
//      this.newPosts = true;
//   }
//   goBack(){
//     window.location.reload();
//   }
//    Reloadpost(){

//    }
//  postComment(){

//    }

 
