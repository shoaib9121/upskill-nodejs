"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Blog {
    constructor(props) {
        const { id, title, content, username, views } = props;
        this.id = id;
        this.content = content;
        this.title = title;
        this.views = views;
        this.username = username;
    }
}
exports.default = Blog;
