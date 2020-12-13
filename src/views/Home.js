import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Networks from '../components/sections/Networks';
import How from '../components/sections/How';
import Earn from '../components/sections/Earn';
import Economics from '../components/sections/Economics';
import Gov from '../components/sections/Gov';
import SyntheticUses from '../components/sections/SyntheticUses';
import Synthetics from '../components/sections/Synthetics';
import Value from '../components/sections/Value';
import Tech from '../components/sections/Tech';
import Roadmap from '../components/sections/Roadmap';
import Social from '../components/sections/Social';
import HowItWorks from '../components/sections/HowItWorks';


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
        <HeroFull className="illustration-section-01 mt-header" />

        <How />
        <HowItWorks />
        <Synthetics />

        <SyntheticUses />
        <Earn />
        <Gov topDivider bottomDivider/>
        <Economics bottomDivider />

        <Tech bottomDivider />
        <Roadmap />
    

        <Social topDivider bottomDivider className="center-content">
          <div className="container">
            <SectionHeader data={genericSection01Header} className="center-content" />
            <ButtonGroup>
              <a href="https://twitter.com/destakehq" target="_blank"><Button color="primary" wideMobile>Twitter</Button></a>
              <a href="https://t.me/DeStakeHQ" target="_blank"><Button color="secondary" wideMobile>Telegram</Button></a>
            </ButtonGroup>
          </div>
        </Social >





      </React.Fragment>
    );
  }
}

export default Home;
