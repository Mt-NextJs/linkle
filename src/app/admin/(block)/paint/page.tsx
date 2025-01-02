"use client";
import React, {
  FormEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import * as fabric from "fabric";

import Layout from "@app/admin/(block)/components/layout";
// import { useSearchParams } from "next/navigation";

const Page = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const layoutRef = useRef<HTMLDivElement>(null);

  // const prevPath = useSearchParams().get("prevPath") || "/admin";

  useLayoutEffect(() => {
    if (!layoutRef.current) return;
    const { width, height } = layoutRef.current.getBoundingClientRect();
    const newCanvas = new fabric.Canvas("canvas", {
      width,
      height,
    });
    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose().then();
    };
  }, []);

  const addImageBlock = async () => {
    // const params = {
    //   type: 4,
    //   title,
    //   url: connectingUrl,
    //   imgUrl: selectedImageUrl,
    // };
    //
    // const blockApis = await adminApiInstance;
    // const response = await blockApis.addBlock(params);
    // if (!response) return;
    // if (response.ok) {
    //   alert("이미지 블록 추가 완료");
    //   router.push("/admin");
    // } else await blockApis.handleError(response);
  };

  const handleAddButtonClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Layout title="그림판 블록" onSubmit={handleAddButtonClick} prevPath="">
      <div className={"min-h-[24rem] w-full"} ref={layoutRef}>
        <canvas id="canvas" ref={canvasRef} className={"bg-white"} />
      </div>
    </Layout>
  );
};

export default Page;
