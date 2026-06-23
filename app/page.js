import fs from "fs";
import path from "path";
import GsapWrapper from "./GsapWrapper";

export default function Home() {
  const bodyPath = path.join(process.cwd(), "app", "body_content.html");
  let bodyHtml = fs.readFileSync(bodyPath, "utf8");
  
  return (
    <GsapWrapper>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </GsapWrapper>
  );
}
