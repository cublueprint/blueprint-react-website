import TeamsTitleImage from '../images/teams_title_block.png';

const aboutContent = {
    titleBlock: {
        title: 'About The Club',
        subtitle: 'We\'re a club at Carleton University that develops pro-bono apps for nonprofits and promotes tech for social good.',
        image: {
            picture: TeamsTitleImage,
            alt: 'about title block picture',
    },
    buttons: [
      {
        content: 'OUR TEAM >',
        link: '/teams',
      },
    ]
    },
    mission: { 
        image: { 
            picture: TeamsTitleImage,
            alt: 'mission statement content block picture'
        },
        description: "To make beautiful engineering accessible and useful for those who create communities and promote public welfare."
    }
}

export default aboutContent