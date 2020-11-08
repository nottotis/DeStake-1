import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Networks from '../components/sections/Networks';
import How from '../components/sections/How';
import Economics from '../components/sections/Economics';
import Gov from '../components/sections/Gov';
import Value from '../components/sections/Value';
import Tech from '../components/sections/Tech';
import Roadmap from '../components/sections/Roadmap';
import Social from '../components/sections/Social';

// import some required elements
import Button from '../components/elements/Button';
import ButtonGroup from '../components/elements/ButtonGroup';

class Home extends React.Component {

  state = {
    videoModalActive: false
  }
  openModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ videoModalActive: false });
  }

  render() {

    const genericSection01Header = {
      title: 'Join the Community'
    }

    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <Networks topDivider bottomDivider />
        <How />
        <Gov topDivider bottomDivider/>
        <Economics />
        <Value bottomDivider  />
        <Tech bottomDivider />
        <Roadmap />

        <Social topDivider bottomDivider className="center-content">
          <div className="container">
            <SectionHeader data={genericSection01Header} className="center-content" />
            <ButtonGroup>
              <Button color="primary" wideMobile>Twitter</Button>
              <Button color="secondary" wideMobile>Telegram</Button>
            </ButtonGroup>
          </div>
        </Social >



      </React.Fragment>
    );
  }
}

export default Home;
