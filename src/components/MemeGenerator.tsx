import { useEffect, useRef } from "react";
import {
  firstMeme,
  secondMeme,
  thirdMeme,
  fourthMeme,
  fifthMeme,
  sixthMeme,
  seventhMeme,
  eighthMeme,
  ninthMeme,
  tenth,
} from "../assets/memes";

const MemeGenerator = ({
  winnerName,
  loserName,
  memeIndex,
}: {
  winnerName: string;
  loserName: string;
  memeIndex: number;
}) => {
  const canvasRef = useRef(null);

  const memeArray = [
    {
      image: firstMeme,
      titlePosition: { x: 240, y: 275 },
      winnerNamePosition: { x: 80, y: 220 },
      loserNamePosition: { x: 250, y: 240 },
      titleFontSize: 24,
      nameFontSize: 28,
    },
    {
      image: secondMeme,
      titlePosition: { x: 240, y: 275 },
      winnerNamePosition: { x: 80, y: 120 },
      loserNamePosition: { x: 220, y: 150 },
      titleFontSize: 24,
      nameFontSize: 28,
    },
    {
      image: thirdMeme,
      titlePosition: { x: 45, y: 275 },
      winnerNamePosition: { x: 120, y: 80 },
      loserNamePosition: { x: 180, y: 200 },
      titleFontSize: 14,
      nameFontSize: 28,
    },
    {
      image: fourthMeme,
      titlePosition: { x: 270, y: 275 },
      winnerNamePosition: { x: 80, y: 180 },
      loserNamePosition: { x: 250, y: 200 },
      titleFontSize: 14,
      nameFontSize: 28,
    },
    {
      image: fifthMeme,
      titlePosition: { x: 80, y: 10 },
      winnerNamePosition: { x: 120, y: 120 },
      loserNamePosition: { x: 230, y: 220 },
      titleFontSize: 12,
      nameFontSize: 28,
    },
    {
      image: sixthMeme,
      titlePosition: { x: 45, y: 275 },
      winnerNamePosition: { x: 90, y: 140 },
      loserNamePosition: { x: 240, y: 240 },
      titleFontSize: 14,
      nameFontSize: 28,
    },
    {
      image: seventhMeme,
      titlePosition: { x: 270, y: 275 },
      winnerNamePosition: { x: 80, y: 80 },
      loserNamePosition: { x: 240, y: 100 },
      titleFontSize: 14,
      nameFontSize: 28,
    },
    {
      image: eighthMeme,
      titlePosition: { x: 270, y: 275 },
      winnerNamePosition: { x: 80, y: 100 },
      loserNamePosition: { x: 250, y: 80 },
      titleFontSize: 14,
      nameFontSize: 26,
    },
    {
      image: ninthMeme,
      titlePosition: { x: 270, y: 275 },
      winnerNamePosition: { x: 120, y: 140 },
      loserNamePosition: { x: 80, y: 250 },
      titleFontSize: 14,
      nameFontSize: 28,
    },
    {
      image: tenth,
      titlePosition: { x: 45, y: 15 },
      winnerNamePosition: { x: 220, y: 200 },
      loserNamePosition: { x: 0, y: 0 },
      titleFontSize: 14,
      nameFontSize: 28,
    },
  ];

  const meme = memeArray[memeIndex];

  useEffect(() => {
    if (!winnerName || !loserName) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = meme.image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      ctx.font = `bold ${meme.titleFontSize}px Arial`;
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.textAlign = "center";
      ctx.fillText("- Avik", meme.titlePosition.x, meme.titlePosition.y);
      ctx.strokeText("- Avik", meme.titlePosition.x, meme.titlePosition.y);

      // Draw winner name
      ctx.font = `bold ${meme.nameFontSize}px Arial`;
      ctx.fillText(
        winnerName,
        meme.winnerNamePosition.x,
        meme.winnerNamePosition.y,
      );
      ctx.strokeText(
        winnerName,
        meme.winnerNamePosition.x,
        meme.winnerNamePosition.y,
      );

      // Draw loser name
      ctx.fillText(
        loserName,
        meme.loserNamePosition.x,
        meme.loserNamePosition.y,
      );
      ctx.strokeText(
        loserName,
        meme.loserNamePosition.x,
        meme.loserNamePosition.y,
      );
    };
  }, [winnerName, loserName, meme]);

  return <canvas ref={canvasRef} className="w-[316px] h-[370px]" />;
};

export default MemeGenerator;
