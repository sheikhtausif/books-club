import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Typography,
} from "@mui/material";

import ReactPaginate from "react-paginate";

import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Provider = () => {
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  
  const handleChange = (event) => {
    switch (event.target.name) {
      case "sort": {
        setSort(event.target.value);
        break;
      }
      case "filter": {
        setFilter(event.target.value);
        break;
      }
      default: {
        return;
      }
    }
  };

  return (
    <div>
      <div
        style={{
          background: "#393E46",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1180px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "20px",
          }}
        >
        <div style={{ background:"#393E46",position:"sticky", top:"30px",zIndex:"20"}}>
          <div
            style={{
              display: "flex",
              marginTop: "50px",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "#00ADB5", my: 1.5 }}
              component="div"
            >
              History
            </Typography>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                minWidth: "300px",
              }}
            >
              <FormControl 
                style={{ margin: "0" }}
                variant="filled"
                sx={{
                  background: "white",
                  outline: "none",
                  border: "none",
                  borderRadius: "4px",
                  width: "150px",
                  
                }}
              >
                <InputLabel
                  sx={{ color: "black" }}
                  id="demo-simple-select-filled-label"
                >
                  Sort
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={sort}
                  name="sort"
                  sx={{ color: "black" }}
                  onChange={handleChange}
                >
                  <MenuItem value={"Recent"}>Recent</MenuItem>
                  <MenuItem value={"Oldest"}>Oldest</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                style={{ margin: "0", marginLeft: "15px" }}
                variant="filled"
                sx={{
                  background: "white",
                  outline: "none",
                  border: "none",
                  borderRadius: "4px",
                  width: "150px",
                }}
              >
                <InputLabel
                  sx={{ color: "black" }}
                  id="demo-simple-select-filled-label"
                >
                  Filter
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={filter}
                  name="filter"
                  sx={{ color: "black" }}
                  onChange={handleChange}
                >
                  <MenuItem value={"false"}>Pending</MenuItem>
                  <MenuItem value={"true"}>Completed</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}} className="my-3">
          <div>
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
        
            pageCount={10}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
            onPageChange={1}
          />
          </div>
          <div style={{marginBottom:"16px"}}>
           <NavLink className="btn btn-primary" to="#">
             Add Book
           </NavLink>
           </div>
          </div>
          </div>
          <div>
              <div style={{background:"#222831",color:"white"}}  className="card my-3">
                  <div className="row">
                      <div className="col-md-4">
                         <img  src="https://dailymockup.com/wp-content/uploads/edd/2019/02/Free-Book-Mockup-Template-1000x750.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2" alt="" className="img-fluid" />
                      </div>
                      <div className="col-md-8">
                         <h2 className="card-title mt-3">The Witness</h2>
                          <p className="card-subtitle"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                          <h6 className="mt-1"> Posted on - 27 oct</h6>
                          <div className="mt-5">
                              <p style={{margin:"0"}} className="btn btn-danger">Pending</p>
                              <p style={{margin:"0"}} className="btn btn-success">Distributed</p>
                             
                          </div>
                      </div>
                  </div>

              </div>
              <div style={{background:"#222831",color:"white"}}  className="card my-3">
                  <div className="row">
                      <div className="col-md-4">
                         <img  src="https://dailymockup.com/wp-content/uploads/edd/2019/02/Free-Book-Mockup-Template-1000x750.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2" alt="" className="img-fluid" />
                      </div>
                      <div className="col-md-8">
                         <h2 className="card-title mt-3">The Witness</h2>
                          <p className="card-subtitle"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t</p>
                          <h6 className="mt-1"> Posted on - 27 oct</h6>
                          <div className="mt-5">
               
                              <p style={{margin:"0"}} className="btn btn-danger">Pending</p>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
