import { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Row, Col } from 'reactstrap';

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    }
  })

  const createFadeInClass = () => {
    if (typeof window !== 'undefined') {
      return window.__isAboutLoaded ? '' : 'fadein';
    }

    return 'fadein';
  }


  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title="About Me - Suraj Singh"
        className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
              <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>My name is Suraj Singh and I am an software engineer. </p>
              <p>
              I have a Bachelor's degree in Computer Science.
              </p>
              <p>
                I make Web Applications usually with MERN Stack, but picking up a new framework or language isn't a problem. I have 
                extensive programming experiance and I'm comfortable developing on the frontend or backend. 
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default About;
