import { ReactNode } from "react";

interface ArchiveLayoutProps {
  archive: ReactNode;
  latest: ReactNode;
}

const ArchiveLayout = ({ archive, latest }: ArchiveLayoutProps) => {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
