import TeamsTitleImage from '../images/teams_title_block.png'; 

import AboutPicture from '../images/about.svg';
import BeneficientLogo from '../images/beneficient.png';
import RefugeeCentreLogo from '../images/refugeecentre.png';
import UrbanMindsLogo from '../images/UMlogo.png';

const projectsPageContent = {
  titleBlock: {
    title: {
      text: 'Our Projects',
    },
    subtitle: 'All of Blueprint’s work is open source because we believe in building technology that makes us more open and connected.',
    image: {
      picture: TeamsTitleImage, 
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'Visit our GitLab',
        link: '#', 
      },
    ],
  },
  contentBlocks: [
    {
      style: ['left', 'cloudBlue'],
      title: {
        text: 'Current Projects 🗃️',
      },
      subtitle: 'Check out our projects!',
      image: {
        picture: AboutPicture,
        alt: 'about picture',
      },
      buttons: [
        {
          content: 'READ MORE',
          link: '/About',
        },
      ],
      slider: [
        {
          name: 'Beneficient',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '/#',
          gitlabLink: '/#',
          link: '/Projects/Beneficient',
          image: BeneficientLogo,
        },
        {
          name: 'Allo Canada',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '/#',
          gitlabLink: '/#',
          link: '/Projects/AlloCanada',
          image: RefugeeCentreLogo,
        },
        {
          name: 'Urban Minds',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '/#',
          gitlabLink: '/#',
          link: '/Projects/UrbanMinds',
          image: UrbanMindsLogo,
        },
      ],
    },
    {
      title: {
        text: 'Past Projects 🗃️',
      },
      subtitle: 'Check out our projects!',
      image: {
        picture: AboutPicture,
        alt: 'about picture',
      },
      buttons: [
        {
          content: 'READ MORE',
          link: '/About',
        },
      ],
      slider: [
        {
          name: 'PastProject1',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '#',
          gitlabLink: '#',
          link: '/Projects/PastProject1',
          image: BeneficientLogo,
        },
        {
          name: 'PastProject2',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '#',
          gitlabLink: '#',
          link: '/Projects/PastProject2',
          image: RefugeeCentreLogo,
        },
      ],
    },
    {
      title: {
        text: 'Past Projects 2 🗃️',
      },
      subtitle: 'Check out our projects!',
      image: {
        picture: AboutPicture,
        alt: 'about picture',
      },
      buttons: [
        {
          content: 'READ MORE',
          link: '/About',
        },
      ],
      slider: [
        {
          name: 'PastProject3',
          description: 'Lorem ipsum dolor sit amet.',
          problem: 'this is the problem',
          solution: 'this is the solution',
          deployedLink: '#',
          gitlabLink: '#',
          link: '/Projects/PastProject1',
          image: BeneficientLogo,
        }
      ],
    },
  ],

  banner: {
    text: 'Fill out our application form to be our next project',
    button: {
        content: 'Apply >',
        link: '/apply/non-profit'
    }
  }
};

export default projectsPageContent;
