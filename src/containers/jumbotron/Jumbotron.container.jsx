import React from 'react';
import {Jumbotron} from '../../components';



export default function JumbotronContainer() {
  const data = [
    {
      header: "Who am I?",
      body: "I'm a former Senior Network Engineer (6+ years of experience) turned Software Engineer (2+ years of experience). I decided to pivot and change careers when I felt that I wasn't satisfied – I quit, traveled, and returned to attend a coding bootcamp. I never looked back, and I've never been happier. In fact, my only regret is that I didn't make this career change sooner. I'm now currently looking for new opportunities where I can level up my skills, and collaborate with other like minded developers!",
      image: 'Andre.jpeg'
    }
  ];
  return (
    <>
      {
        data.map(({ header, body, image }) => {
        return  (
          <Jumbotron key={header + image}>
            <Jumbotron.Header>{header}</Jumbotron.Header>
            <Jumbotron.BodyWrap>
              <Jumbotron.ImageBlock src={require(`../../_assets/img/${image}`).default} alt={"Profile"} />
              <Jumbotron.Body>{body}</Jumbotron.Body>
            </Jumbotron.BodyWrap>
          </Jumbotron>
          )
        })
      }
    </>
  );
};
