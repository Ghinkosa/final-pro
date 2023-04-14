import React from "react";
import { FaUserGraduate,FaChalkboardTeacher,FaBookReader,FaBookOpen,FaUserTie,FaTrash} from "react-icons/fa";
import {MdOutlineRestore} from "react-icons/md"
import { useEffect,useState } from "react";
import axios from "axios";
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
          teacherList();
      };
      getPost();
  },[]);
  const teacherList = async () => {
    let token=localStorage.getItem('token')
    axios.defaults.withCredentials = true
    axios.get("http://localhost:8000" + "/sanctum/csrf-cookie").then(
      (response) => {
        axios.get("http://localhost:8000/" + "api/teacherList", { headers: {
           Authorization: 'Bearer ' +token}} )
          .then(
            async (response) => {
             setPost(response.data.user);
            },(error)=>{
                console.log(error)
            }
          )
      })
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
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">user_id</th>
      <th scope="col">phone</th>
      <th scope="col">email</th>
      <th scope="col">photo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  
  <tbody>
{ currenPosts.map((post)=>(
      <tr key={post.id}>
      <th scope="row">{post.id}</th>
      <td>{post.name}</td>
      <td>{post.user_id}</td>
      <td>{post.phone}</td>
      <td>{post.email}</td>
      <td><FaUserTie size={40} color="#ec5782"/></td>
      <td><FaTrash size={25} color="red"/><MdOutlineRestore size={30} color="#20D7D7" className="ms-3"/></td>
    </tr>

))
}

</tbody>
</table>
        </div>
        <div className="mx-auto">
        <ul className='pagination'>
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
    </div>
  );
};
