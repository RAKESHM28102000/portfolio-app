import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
// import Map from "./Map";

const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
  @media only screen and (max-width: 1028px) {
   height:100%;
  }
`;

const Container = styled.div`
  margin-top:70px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap:20px;
  @media only screen and (max-width: 1028px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:5px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top:50px;
  @media only screen and (max-width: 1028px) {
    justify-content: center;
    width:100%;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  margin-top:30px
  @media only screen and (max-width: 1028px) {
   font-size:30px;
   margin:30px 2px;
  }
`;

const Form = styled.form`
  width:500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 1028px) {
    width:250px;
  }
`;

const Input = styled.input`
  padding:20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  @media only screen and (max-width: 1028px) {
    font-size:20px;
    margin:10px 2px;
  }
`;

const TextArea = styled.textarea`
  padding:20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  @media only screen and (max-width: 1028px) {
    font-size:20px;
    margin:10px 2px;
  }
`;

const Button = styled.button`
   background-color: rgb(82, 82, 82);
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  @media only screen and (max-width: 1028px) {
    font-size:20px;
  }
`;

const Right = styled.div`
  flex: 1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:25px;
  @media only screen and (max-width: 1028px) {
    ${'' /* display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center; */}
    display:none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  });
  function setform(e){
   const{name,value} =e.target;
   setForm(function(prev){
    return {...prev,[name]:value}
  });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_et4dha3",
        "template_6r2c7a9",
        ref.current,
        "IOVfu7FGo-01DVraz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setForm({
            name:"",
            email:"",
            message:""

          });
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (<section id="contact">
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" value={form.name} onChange={setform}/>
            <Input placeholder="Email" name="email" value={form.email} onChange={setform} />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={5}
              value={form.message}
              onChange={setform}
            />
            <Button type="submit">Send</Button>
           <h2>{success &&
              "Your message has been sent. We'll get back to you soon :)"}</h2>
          </Form>
        </Left>
        <Right>
        <div className="iconsclass">
         <i  class="fa-brands fa-whatsapp fa-3x"></i>
          <h3 style={{marginTop:"5px",fontSize:"10px"}} >whatsapp</h3>
          {/* <p style={{textAlign:"center",marginTop:"20px"}} >+916383627745</p> */}
          <button style={{marginTop:"5px",fontSize:"10px"}} className="btn btn-lg btn-block btn-dark " type="button">+916383627745</button>
        </div>
   
        <div className="iconsclass">
        <i class="fa-brands fa-linkedin fa-3x"></i>
        <h3 style={{marginTop:"5px",fontSize:"10px"}}>linkedin</h3>
       <button style={{marginTop:"5px",fontSize:"10px"}} className='btn btn-lg btn-block btn-dark'><a style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/in/rakesh-m-b67121217/" target="blank">Profile</a></button>
   
          {/* <button class="btn btn-lg btn-block btn-dark button-in-cart" type="button">tanpsycon_2023</button> */}
        </div>
 
        <div className="iconsclass"  >
       <i class="fa-solid fa-envelope fa-3x"></i>
        <h3 style={{marginTop:"5px",fontSize:"10px"}}>Mail-id</h3>
        {/* <p  style={{textAlign:"center",marginTop:"20px"}} >mrakeshmrakesh885@gmail.com</p> */}
        <button style={{marginTop:"5px",fontSize:"10px"}} class="btn btn-lg btn-block btn-dark" type="button">mrakeshmrakesh885@gmail.com</button>
        </div>
        </Right>
      </Container>
    </Section>
    </section>
  );
};

export default Contact;