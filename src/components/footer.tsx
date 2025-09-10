interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  copyright?: string;
}

const Footer = ({
  copyright = "Built by Samprad using React, ChatGPT and a lot of coffee ☕",
}: FooterProps) => {
  return (
    <section className="py-2">
      <div className="container">
        <footer>
          <div className="text-neutral-500 text-center px-16 mt-16 border-t pt-2 text-sm font-medium dark:text-neutral-400">
            <p>{copyright}</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
