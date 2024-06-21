export type BreadCrumbItemProps = {
  label: string;
  href: string;
};

export type story_chapter = {
  arc: string;
  chapter: string;
  part: string;
  chapterName: string;
  content: string[];
  author: string;
  authorName: string;
  createdAt: number;
};

export type story_chapters = {
  arcIndex: number;
  arc: string;
  chapters: [
    {
      chapterIndex: number;
      chapter: string;
      parts: [
        {
          partIndex: number;
          part: string;
          chapterName: string;
          content: string[] | string;
          author: string;
          authorName: string;
          createdAt: number;
        },
      ];
    },
  ];
};

export type chapters = {
  chapterIndex: number;
  chapter: string;
  parts: [
    {
      partIndex: number;
      part: string;
      chapterName: string;
      content: string[];
      author: string;
      authorName: string;
      createdAt: number;
    },
  ];
};

export type parts = {
  partIndex: number;
  part: string;
  chapterName: string;
  content: string[];
  author: string;
  authorName: string;
  createdAt: number;
};

export type read_story_arcs = {
  arc: number;
  chapters: read_story_chapters[];
};

export type read_story_chapters = {
  chapter: number;
  parts: read_story_part[];
};

export type read_story_part = {
  part: number;
};
