import React, { Component } from 'react';

import Devoid from '../assests/devoid.mp3';
import Angel from '../assests/angels-candle.mp3';
import Above from '../assests/above-the-clouds.mp3'

class Music extends Component {
    constructor() {
        super();

        this.player = new Audio();

        this.state = {
            current: {},
            index: 0,
            isPlaying: false,
            songs: [
                {
                    title: 'Devoid',
                    artist: 'Maximus',
                    src: Devoid
                },
                {
                    title: 'The Angels Candle',
                    artist: 'Maximus',
                    src: Angel
                },
                {
                    title: 'Above the Clouds',
                    artist: 'Maximus',
                    src: Above
                }
            ]
        }
    }

    mediaPlay = (song) => {
        const { current, index, songs } = this.state;
        if(typeof song.src != 'undefined') {
            this.setState({
                current: song
            });
            this.player.src = current.src;
        }

        this.player.play();
        this.player.addEventListener('ended', function() {
            this.index++;
            if(index > (songs.length - 1)) {
                this.setState({
                    index: 0
                })
            }

            this.setState({
                current: songs[index]
            })
            this.player.play(current);
        });

        this.setState({
            isPlaying: true
        })
    }

    mediaPause = () => {
        this.player.pause();
        this.setState({
            isPlaying: false
        });
    }

    mediaNext = () => {
        const { index, songs, current } = this.state;
        this.index++;
        if(index > (songs.length - 1)) {
            this.setState({
                index: 0
            })
        }

        this.setState({
            current: songs[index]
        })
        this.player.play(current);
    }

    mediaPrev = () => {
        const { index, songs, current } = this.state;
        this.index--;
        if(index < 0) {
            this.setState({
                index: songs.length - 1
            })
        }

        this.setState({
            current: songs[index]
        })
        this.player.play(current);
    }

    render() {
        const { title, artist } = this.state.current;

        const media = this.state.songs.map(song => {
            return (
                <button
                    key={song.src}
                    onClick={() => this.mediaPlay(song)}
                    className={(song.src === this.state.current.src) ? 'song playing' : 'song'}
                >
                    {song.title} - {song.artist}
                </button>
            )
        })

        return (
            <div className='music-wrapper'>
                <div className='music-player'>
                    <h2 className='song-title'>{title} - <span>{artist}</span></h2>
                    <div className='controls'>
                        <button className='prev' onClick={() => this.mediaPrev()} >Prev</button>
                        <button className='play' onClick={() => this.mediaPlay()}>Play</button>
                        <button className='pause' onClick={() => this.mediaPause()} >Pause</button>
                        <button className='next' onClick={() => this.mediaNext()} >Next</button>
                    </div>
                </div>

                <div className='playlist'>
                    <h3>The Playlist</h3>
                    {media}
                </div>
            </div>
        )
    }
}

export default Music;