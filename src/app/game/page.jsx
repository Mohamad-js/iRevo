'use client'
import { useEffect, useRef, useState } from "react";
import { GiCartwheel } from "react-icons/gi";


function Game(){
   const highScoreRef = useRef(0);
   const [highScore, setHighScore] = useState(0);
   const [gameState, setGameState] = useState('ready');
   const [score, setScore] = useState(0);
   const playerRef = useRef(null)
   const floorY = -50;
   const obstacleRefs = useRef([])

   const worldRef = useRef({
      speed: 6,
      level: 1,
      nextSpawnX: 1600
   });

   const obstaclesRef = useRef([
      {
         id: 1,
         x: 1500,
         y: floorY,
         width: 64,
         height: 64,
      },
      
      {
         id: 2,
         x: 2000,
         y: floorY,
         width: 64,
         height: 64,
      },
      
      {
         id: 3,
         x: 2500,
         y: floorY,
         width: 64,
         height: 64,
      },

      {
         id: 4,
         x: 3000,
         y: floorY,
         width: 64,
         height: 64,
      },

      {
         id: 5,
         x: 3500,
         y: floorY,
         width: 64,
         height: 64,
      },

      {
         id: 6,
         x: 4000,
         y: floorY,
         width: 64,
         height: 64,
      },
      {
         id: 7,
         x: 4500,
         y: floorY,
         width: 64,
         height: 64,
      },
      
      {
         id: 8,
         x: 5000,
         y: floorY,
         width: 64,
         height: 64,
      },
      
      {
         id: 9,
         x: 5500,
         y: floorY,
         width: 64,
         height: 64,
      },

      {
         id: 10,
         x: 6000,
         y: floorY,
         width: 64,
         height: 64,
      },

      {
         id: 11,
         x: 6500,
         y: floorY,
         width: 64,
         height: 64,
      },

      {
         id: 12,
         x: 7000,
         y: floorY,
         width: 64,
         height: 64,
      },
   ]);
   
   const playerDataRef = useRef({
      speed: 5,
      velocityY: 0,
      grounded: true,

      width: 64,
      height: 64,
   })


   const positionRef = useRef({
      x: 80,
      y: floorY,
   })

   const inputRef = useRef({
      left: false,
      right: false,
   });

   const gameDataRef = useRef({
      state: 'ready',
      score: 0
   });
   
   
   
   useEffect(() => {
   
      const leftWall = 0;
      const rightWall = window.innerWidth - 64;
      
      
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
      
      function restartGame() {
         positionRef.current.x = 80;
         positionRef.current.y = floorY;
         
         worldRef.current.nextSpawnX = 1237;
         playerDataRef.current.velocityY = 0;
         playerDataRef.current.grounded = true;
         
         gameDataRef.current.score = 0;
         setScore(0);
         
         gameDataRef.current.state = 'ready';
         setGameState('ready');
         
         worldRef.current.speed = 6;
         worldRef.current.level = 1;
         
         obstaclesRef.current[0].x = 1500;
         obstaclesRef.current[1].x = 2000;
         obstaclesRef.current[2].x = 2500;
         obstaclesRef.current[3].x = 3000;
         obstaclesRef.current[4].x = 3500;
         obstaclesRef.current[5].x = 4000;
         obstaclesRef.current[6].x = 4500;
         obstaclesRef.current[7].x = 7000;
         obstaclesRef.current[8].x = 5500;
         obstaclesRef.current[9].x = 6000;
         obstaclesRef.current[10].x = 6500;
         obstaclesRef.current[11].x = 5000;
      }

function handleKeyDown(e) {

   if (e.key === 'ArrowRight') {
      inputRef.current.right = true;
   }

   if (e.key === 'ArrowLeft') {
      inputRef.current.left = true;
   }

   if (e.code !== 'Space') return;

   if (gameDataRef.current.state === 'ready') {

      gameDataRef.current.state = 'playing';
      setGameState('playing');

      playerDataRef.current.velocityY = -20;
      playerDataRef.current.grounded = false;

      return;
   }

   if (gameDataRef.current.state === 'game_over') {

      restartGame();

      gameDataRef.current.state = 'playing';
      setGameState('playing');

      return;
   }

   if (
      gameDataRef.current.state === 'playing' &&
      playerDataRef.current.grounded
   ) {
      playerDataRef.current.velocityY = -20;
      playerDataRef.current.grounded = false;
   }
   
   if (gameDataRef.current.state === 'game_over') {
   
      restartGame();
   
      gameDataRef.current.state = 'playing';
      setGameState('playing');
   
      return;
   }
}

      function handleKeyUp(e) {

         if (e.key === 'ArrowRight') {
            inputRef.current.right = false;
         }

         if (e.key === 'ArrowLeft') {
            inputRef.current.left = false;
         }
      }

      function loop() {

         if (gameDataRef.current.state === 'game_over') {
            
            setGameState('game_over');
            console.log(highScoreRef);
            
            requestAnimationFrame(loop);
            return;
         }


         if (gameDataRef.current.state === 'ready') {
            requestAnimationFrame(loop);
            return;
         }

         if (gameDataRef.current.score % 10 === 0) {
            setScore(gameDataRef.current.score);
         }
         
         gameDataRef.current.score += 1;
         
         obstaclesRef.current.forEach((obstacle) => {   
            
            obstacle.x -= worldRef.current.speed;
            
            if (obstacle.x < -obstacle.width) {

               let gap;

               const random = Math.random();

               if (random < 0.3) {
                  gap = -30 + Math.random() * 40;
               }
               else if (random < 0.7) {
                  gap = -20 + Math.random() * 100;
               }
               else {
                  gap = -10 + Math.random() * 250;
               }

               worldRef.current.nextSpawnX =
               worldRef.current.nextSpawnX +
               obstacle.width +
               gap;

               obstacle.x = worldRef.current.nextSpawnX;
               obstacle.height = 40 + Math.random() * 120;
            }

         })

         obstacleRefs.current.forEach((element, index) => {
            if (!element) return;
            
            const obstacle = obstaclesRef.current[index];
            
            element.style.transform = `translate(
               ${obstacle.x}px,
               ${obstacle.y}px
            )`;

            element.style.height = `${obstacle.height}px`;
         })
         
         const playerLeft = positionRef.current.x
         const playerRight = positionRef.current.x + playerDataRef.current.width
         const playerTop = positionRef.current.y
         const playerBottom = positionRef.current.y + playerDataRef.current.height
         
         if (
            gameDataRef.current.score >
            worldRef.current.level * 100
         ) {
            worldRef.current.level++;
            worldRef.current.speed += 0.3;

            console.log(
               'LEVEL UP',
               'LEVEL:',
               worldRef.current.level,
               'SPEED:',
               worldRef.current.speed
            );
         }
         
         const collision =
         obstaclesRef.current.some(
            obstacle => {
               
               const obstacleLeft =
                     obstacle.x;
                     
                     const obstacleRight =
                     obstacle.x +
                     obstacle.width;

                  const obstacleTop =
                     obstacle.y;

                     const obstacleBottom =
                     obstacle.y +
                     obstacle.height;

                  return (
                     playerLeft <= obstacleRight &&
                     playerRight >= obstacleLeft &&
                     playerTop <= obstacleBottom &&
                     playerBottom >= obstacleTop
                  );
               }
            );
         

         playerDataRef.current.velocityY += 0.8;

         positionRef.current.y += playerDataRef.current.velocityY;

         if (inputRef.current.right) {
            positionRef.current.x += playerDataRef.current.speed;
         }

         if (positionRef.current.x > rightWall) {
            positionRef.current.x = rightWall;
         }

         if (inputRef.current.left) {
            positionRef.current.x -= playerDataRef.current.speed;
         }

         if (positionRef.current.x < leftWall) {
            positionRef.current.x = leftWall;
         }

         if (positionRef.current.y > floorY) {
            
            positionRef.current.y = floorY;
            playerDataRef.current.velocityY = 0;
            playerDataRef.current.grounded = true
         }
         
         playerRef.current.style.transform = `translate(
            ${positionRef.current.x}px,
            ${positionRef.current.y}px
            )`;
            
            
         if (collision) {
            if (gameDataRef.current.score > highScoreRef.current) {
               highScoreRef.current = gameDataRef.current.score;
               setHighScore(highScoreRef.current)
            }
            gameDataRef.current.state = 'game_over';
         }
         
         requestAnimationFrame(loop);
      }

      requestAnimationFrame(loop)

      return () => {}
   }, [])


   return(
      <div className="relative w-screen h-screen overflow-hidden">

         <div className="absolute top-5 left-5 text-3xl">
            Score {score}
         </div>

         <div className="absolute top-5 left-50 text-3xl">
            Record: {highScore}
         </div>

         <div 
            ref={playerRef}   
            className='absolute rounded-full bottom-0 left-0 w-16 h-16 bg-red-500'
         />
         {
            obstaclesRef.current.map((obstacle, index) => (
               <div 
                  key={obstacle.id}
                  ref={(element) => {
                     obstacleRefs.current[index] = element
                  }}
                  className='absolute bottom-0 left-0 w-16 bg-white'
               />
            ))
         }
         <div className="absolute bottom-0 w-full h-12.5 bg-white"/>

         {
            gameState === 'game_over' && 
            <div className="fixed w-full min-h-dvh text-2xl bg-black flex justify-center items-center">
               GAME OVER :(
            </div>
         }
      </div>
   )
}

export default Game;