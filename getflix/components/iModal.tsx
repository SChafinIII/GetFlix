import React, {useCallback, useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import {AiOutlineClose} from "react-icons/ai"
import FavoriteButton from "./favButton"
import { BsFillPlayFill } from 'react-icons/bs';
import { movieActions } from "../storage/movies";
import { appUseDispatch, appUseSelector} from "../storage/index";

interface InfoModalProps {
    onClose: any;
}
const InfoModal: React.FC<InfoModalProps> = ({onClose}) => {
    const movies = appUseSelector(state => state.movies);
    const dispatch = appUseDispatch();
    const router = useRouter();


    const isVisible = movies.showModal
    if(!isVisible) return null;

    const data  = movies.movie[0];


    const handleClose = () => {
      dispatch(movieActions.hideModal())
    };
  }; 

    export default InfoModal