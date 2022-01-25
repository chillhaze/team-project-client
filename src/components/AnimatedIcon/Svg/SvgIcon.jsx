import { useState, useEffect } from 'react';
import InlineSVG from 'svg-inline-react';

const Svg = ({ url, color = "inherit", backgroundColor = "inherit" }) => {
  const [svg, setSvg] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.body)
      .then(rb => {
        const reader = rb.getReader();
        
        return new ReadableStream({
          start(controller) {
            function push() {
              reader.read().then(({ done, value }) => {
                if (done) {
                  controller.close();
                  return;
                }

                controller.enqueue(value);
                push();
              })
            }

            push();
          }
        });
      })
      .then(stream => new Response(stream, { headers: { "Content-Type": "text/html" } }).text())
      .then(svgData => setSvg(svgData))
  }, [url])

  return (
    svg && <InlineSVG style={{ color, backgroundColor }} src={svg} />
  );
};

export default Svg;