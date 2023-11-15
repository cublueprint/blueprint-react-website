export interface HomeBlockProps {
  content: {
    title: string;
    subtitle: string;
    image: {
      picture: any;
      alt: string;
    };
    style?: string;
    buttons: {
      content: string;
      link: string;
    }[];
    slider?: {
      name: string;
      description: string;
      link: string;
      image: any;
    }[];
  };
}
