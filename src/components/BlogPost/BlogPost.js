import React, { Component } from 'react'

class BlogPost extends Component {
    render() {
        return(
            <main>
                <h2>{this.props.blog.title}</h2>
                <p>By: {this.props.blog.author}</p>
                <p>{this.props.blog.date}</p>
                <img 
                    src={this.props.blog.img} 
                    alt={this.props.blog.alt}
                />
                <p>{this.props.blog.content}</p>
            </main>
        )
    } 
}

export default BlogPost;