import TeamsTitleImage from '../images/teams_title_block.png';

const teams_content = {
  TitleBlock: {
    title: 'Meet the Team!',
    subtitle:
      'Take a glimpse at the individuals who have made the team what it is today.',
    image: {
      picture: TeamsTitleImage,
      alt: 'title picture',
    },
    buttons: [
      {
        content: 'JOIN US',
        link: 'ADD THIS IN LATER LEL',
      },
    ],
  },
  TeamsList: [
    {
      name: 'Execs',
      members: [
        {
          name: 'Name',
          linkedin: 'linkedin',
          picture: 'picture of you',
        },
        {
          name: 'Name',
          linkedin: 'linkedin',
          picture: 'picture of you',
        },
        {
          name: 'Name',
          linkedin: 'linkedin',
          picture: 'picture of you',
        },
      ],
    },
    {
      name: 'Urban Minds',
      members: [],
    },
    {
      name: 'Beneficient',
      members: [],
    },
    {
      name: 'Website Team',
      members: [],
    },
  ],
};

export default teams_content;
