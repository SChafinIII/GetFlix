import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

interface PlayButtonProps {
    movieId: string;
  }
  
  const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
    const router = useRouter();
  
    const handlePlayClick = () => {
      router.push(`/watch/${movieId}`);
    };
  
    return (
      <button onClick={handlePlayClick} className="">
        <BsFillPlayFill className="" />
        Play
      </button>
    );
  };

// interface PlayButtonProps {
//     movieId: string ;
//   }  
//   const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
//     const router = useRouter();
  
//     return (
//       <button 
//         onClick={() => router.push(`/watch/${movieId}`)}
//         className=""
//         >
//           <BsFillPlayFill className="" />
//           Play
//       </button>
//     );
//   }

  export default PlayButton;