import container from "../model/model.js";
import renderer from "../view/renderer.js"

class EventManager {
    constructor() {
        this.comment_btn = document.getElementById('comment_btn');
        this.read_btn = document.querySelectorAll(".read_btn");
        this.sign_in_form = document.getElementById('sign_in');
        this.sign_up_form = document.getElementById('sign_up');
        this.log_out_btn = document.getElementById('log_out');

        this.ConstructCommentBtn();
        this.ConstructReadBtn();
        this.ConstructSignInBtn();
        this.ConstructSignUpBtn();
        this.ConstructLogOutBtn();
    }
    
    ConstructCommentBtn() {
        if(!this.comment_btn) return;
        this.comment_btn.addEventListener("click", () => {
            if(container.IsLogIn()) {
                if(document.getElementById("Comment").value) {
                    container.AddComment(parseInt(document.URL.split('#')[1]), document.getElementById("Comment").value);
                    renderer.RenderComments();
                }
                else
                    alert("We know you have something to say. Write more than nothing.");
            }
            else
                alert('You must be logged in to post a comment')
        });
    }

    ConstructReadBtn() {
        if(!this.read_btn) return;
        this.read_btn.forEach((btn, idx) => { btn.addEventListener("click", () => {
            document.location.href = "idea.html#" + idx; 
            }) 
        });
    }

    ConstructLogOutBtn() {
        if(!this.log_out_btn) return;
        this.log_out_btn.addEventListener("click", () => {
            sessionStorage.setItem('email', '');
            sessionStorage.setItem('username', '');
            document.location.href = "../index.html"; 
            }); 
    }

    ConstructSignInBtn() {
        if(!this.sign_in_form) return;
        this.sign_in_form.addEventListener("submit", () => {
            if(container.profiles[document.getElementById("inputEmail").value].password ==
                document.getElementById("inputPassword").value) {
                    sessionStorage.setItem('username', container.profiles[document.getElementById("inputEmail").value].username);
                    sessionStorage.setItem('email', document.getElementById("inputEmail").value);
            }
        });
    }

    ConstructSignUpBtn() {
        if(!this.sign_up_btn) return;
        this.sign_up_btn.addEventListener("submit", () => {
            if(!container.profiles[document.getElementById("inputEmail").value]
            ) {
                    container.profiles[document.getElementById("inputEmail").value] = {
                        "username" : document.getElementById("inputUsername").value,
                        "email" : document.getElementById("inputEmail").value,
                        "date" : document.getElementById("date").value,
                        "password" : document.getElementById("inputPassword").value,
                    };
                    sessionStorage.setItem('username', container.profiles[document.getElementById("inputEmail").value].username);
                    sessionStorage.setItem('email', document.getElementById("inputEmail").value);
                    document.location.href = "profile.html"; 
            }
            else
                alert("Email is already taken.")
        });
    }
}

let controller = new EventManager();