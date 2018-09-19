function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let print = '';
            print += `Post: ${this.title}\n`;
            print += `Content: ${this.content}`;
            return print;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let print = super.toString();
            print += `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length !== 0) {
                print += '\nComments:';
                this.comments.forEach((c) => print += `\n * ${c}`);
            }
            return print;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let print = super.toString();
            print += `\nViews: ${this.views}`;
            return print;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

// Test.
let obj = solve();
let Post = obj.Post;
let SocialMediaPost = obj.SocialMediaPost;
let BlogPost = obj.BlogPost;

let post = new Post("Post on post", "Content in post");
console.log(post.toString());
console.log();
let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
console.log();
let bp = new BlogPost('Blog Post', 'Blog Content');
bp.views = 5;
bp.view().view().view();
console.log(bp.toString());
