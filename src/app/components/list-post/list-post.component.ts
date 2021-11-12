import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css'],
})
export class ListPostComponent implements OnInit {
  formValue!: FormGroup;
  updateFormValue!: FormGroup;
  posts!: any;
  newPost: any;
  editPostModal: any;
  searchPost?: any;
  searchTerm!: string;

  constructor(private formBuilder: FormBuilder, private service: CrudService) {}

  ngOnInit() {
    this.formValue = this.formBuilder.group({
      userId: [''],
      title: [''],
      body: [''],
    });

    this.updateFormValue = this.formBuilder.group({
      updateUserId: [''],
      updateTitle: [''],
      updateBody: [''],
    });

    this.getAllData();
    // this.search(this.posts);
  }

  getAllData() {
    this.service.getData().subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  postData() {
    const { value } = this.formValue;
    console.log(value);

    const postObj = {
      id: value.userId,
      userId: value.userId,
      title: value.title,
      body: value.body,
    };
    console.log(postObj);

    this.service.postData(postObj).subscribe((res) => {
      console.log(res.id);
      postObj['id'] = res.id;
      this.posts.push(postObj);
      console.log(res);
      this.formValue.reset();
    });
    this.getAllData();
  }

  editModal(editPost: any) {
    console.log(editPost.id);
    this.editPostModal = editPost;
  }

  updatePost() {
    const { value } = this.updateFormValue;
    const postObj = {
      id: value.updateUserId,
      userId: value.updateUserId,
      title: value.updateTitle,
      body: value.updateBody,
    };

    this.service
      .updateData(postObj, this.editPostModal.id)
      .subscribe((data) => {
        console.log(data);
      });
  }

  deletePost(post: any) {
    console.log(this.editPostModal.id);
    this.service.deleteData(post.id).subscribe((res) => {
      let index = this.posts.indexOf(post);
      console.log(post);
      this.posts.splice(index, 1);
      console.log(res);
    });
  }

  search(post: string): void {
    this.posts = this.searchPost.filter((val: any) =>
      val.title.toLowerCase().includes(post)
    );
    console.log(post);
  }
}
