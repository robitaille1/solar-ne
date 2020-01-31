import React, { Component } from 'react'
import './BlogPost.css'

class BlogPost extends Component {
    render() {
        return(
            <main className='BlogPost'>
                <h2>{this.props.blog.title}</h2>
                <p>By: {this.props.blog.author}</p>
                <p>{this.props.blog.date}</p>
                <img 
                    src={this.props.blog.img} 
                    alt={this.props.blog.alt}
                />
                <div className='blog-content'>
                    <p>{this.props.blog.content}</p>
                </div>
            </main>
        )
    } 
}

export default BlogPost;