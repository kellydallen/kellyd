declare module "astro:content" {
  export interface BlogPost {
    id: string;
    data: {
      tags: string[];
      pubDate: Date;
      title: string;
    };
  }
}
