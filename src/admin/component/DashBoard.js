import React from "react";
import { FaUserGraduate,FaChalkboardTeacher,FaBookReader,FaBookOpen,FaUserTie,FaTrash} from "react-icons/fa";
import {MdOutlineRestore} from "react-icons/md"
import { useEffect,useState } from "react";
export const DashBoard = () => {
  const [post,setPost]=useState([]);
  const [currentPage, setCurrentPage]=useState(1)
  const [postPage]=useState(6)
  const pages=[];
  for(let i=1;i<= Math.ceil(post.length/postPage);i++){
      pages.push(i)
  }
  const nextpage=(a)=>{
      setCurrentPage(a);
    }
    const previes=()=>{
      if(currentPage > 1){
          setCurrentPage(currentPage-1);
      }
    }
    const nextPage=()=>{
      if(currentPage<pages.length){
          setCurrentPage(currentPage+1);
      }
    }
  useEffect(()=>{
      const getPost=async()=>{
          const postsFromserv =await fetchPost();
          setPost(postsFromserv);
      };
      getPost();
  },[]);
  const fetchPost=async()=>{
      const res=await fetch("https://jsonplaceholder.typicode.com/posts")
      const data =await res.json()
      return data;
  }
  const lastPost=currentPage*postPage
  const firstPost=lastPost-postPage
  const currenPosts=post.slice(firstPost ,lastPost)
  return (
    <div className="mt-4">
      <div className="fs-2 ms-2 text-white ">DashBoard</div>
      <div className="d-flex flex-wrap">
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaUserGraduate size={40} color="#ec5782" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color">
              Student
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color">3345</div>
          </div>
        </div>
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaChalkboardTeacher size={40} color="#294BF9" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color-t">
              Teacher
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color-t">345</div>
          </div>
        </div>
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaBookReader size={40} color="#554D00" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color-c">
               Class and Section
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color-c">45</div>
          </div>
        </div>
        <div className="card box-sizes d-flex flex-row">
          <div className="my-auto ps-4">
            <FaBookOpen size={40} color="#3300FF" />
          </div>
          <div className="card-body">
            <div className="card-title m-auto ms-3 fs-5 dashboard-color-s">
              Subject
            </div>
            <div className="card-subtitle ms-3 fs-3 dashboard-color-s">45</div>
          </div>
        </div>
      </div>
      <div className="ms-5 mt-5 stud-list">
        <div className="p-4 fs-4 text-dark ">Student List</div>
        <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">Gender</th>
      <th scope="col">phone</th>
      <th scope="col">DOB</th>
      <th scope="col">photo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  

  
  <tbody>
{ currenPosts.map((post)=>(
      <tr key={post.id}>
      <th scope="row">{post.id}</th>
      <td>Mark Otto</td>
      <td>M</td>
      <td>0945235563</td>
      <td>july 30 2000</td>
      <td><FaUserTie size={40} color="#ec5782"/></td>
      <td><FaTrash size={25} color="red"/><MdOutlineRestore size={30} color="#20D7D7" className="ms-3"/></td>
    </tr>

))
}

</tbody>
</table>
        </div>
        <ul className='mx-auto pagination px-auto'>
        <a onClick={()=>previes()}href='#' className='page-link'>Prev</a>
        {pages.map((page)=>(
            <li key={page} className="page-item">
                <a onClick={()=>nextpage(page)} href='#' className='page-link'>{page}</a>
            </li>
        ))}
        <a onClick={()=>nextPage()} href='#' className='page-link'>Next</a>
        </ul>
      </div>
    </div>
  );
};
