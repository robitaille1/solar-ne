import React, { Component } from 'react'
import './BlogSection.css'
import BlogItem from '../BlogItem/BlogItem'

class BlogSection extends Component{
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          id: 1,
          title: 'Plug-In Electric Vehicle Rebates',
          img: 'https://www.nrel.gov/news/program/2018/images/20180813-thsc-48742.jpg',
          alt: 'electric car'
        },
        {
          id: 2,
          title: 'Other Ways You Can Be Sustainable',
          img: 'https://theminimalistvegan.com/wp-content/uploads/2019/08/100-Simple-Tips-To-Live-a-More-Sustainable-Lifestyle-e1566537932796.jpg',
          alt: 'person holding earth'
        },
        {
          id: 3,
          title: 'Solar Power New England Makes Solar More Affordable',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeFVmiCmMT--fJ2KA-ewIE7kboA6bkWOzKS_RTrRb6WAcNFUWNg&s',
          alt: 'solar panels'
        }
      ]
    };
  }
  render(){
    return (
      <main className='BlogSection'>
            <div className='container'>
                <h2 className='main-header'>Recent Blog Posts</h2>
                <section className='blog-display' role='main'>
                   {this.state.blogs.map(blog =>
                    <BlogItem key={blog.id} blog={blog} />
                    )}
                </section>
            </div>
      </main>
    );
  }
}
  
export default BlogSection;