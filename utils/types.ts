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
  ID: number;
};

export type story_chapters = {
  arcIndex: number;
  arc: string;
  numberOfChapters: number;
  chapters: [
    {
      chapterIndex: number;
      chapter: string;
      numberOfParts: number;
      parts: [
        {
          partIndex: number;
          part: string;
          chapterName: string;
          content: string[];
          author: string;
          authorName: string;
          createdAt: number;
          ID: number;
        },
      ];
    },
  ];
};

export type arcs = {
  arcIndex: number;
  arc: string;
  numberOfChapters: number;
  createdAt: number;
  href: string;
};

export type chapters = {
  chapterIndex: number;
  chapter: string;
  numberOfParts: number;
  chapterName: string;
  createdAt: number;
  href: string;
};

export type parts = {
  partIndex: number;
  part: string;
  chapterName: string;
  createdAt: number;
  href: string;
};

export type part = {
  partIndex: number;
  part: string;
  chapterName: string;
  content: string[] | string;
  author: string;
  authorName: string;
  createdAt: number;
  isFirst: boolean;
  backHref: string;
  isLast: boolean;
  nextHref: string;
  ID: number;
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
