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
                    className='blog-img'
                    src={this.props.blog.img} 
                    alt={this.props.blog.alt}
                />
                <div className='blog-content'>
                    <p>{this.props.blog.content}</p>
                </div>
                {this.props.blog.asset === null ? null : <img className='asset' src={this.props.blog.asset.table} alt='blog asset' />}
            </main>
        )
    } 
}

export default BlogPost;