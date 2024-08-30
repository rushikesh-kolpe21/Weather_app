import React, { useState } from 'react'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {



    let imgUrl = 'https://images.unsplash.com/photo-1570299437522-f66ff98d52e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D';

    let HOT_URL ='https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=612x612&w=is&k=20&c=MaaQoydzyYxtaU4w3mnJpIxNApjYVPARAWy39taLyc4=';
    let COLD_URL="https://images.unsplash.com/photo-1526991757821-1307bf7800f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fENPTER8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL='https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJBSU58ZW58MHx8MHx8fDA%3D';

  

  return (
    <div>
       
       
       
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity >70 ? 
                    ( RAIN_URL ):
                        info.temp > 15?
                        (HOT_URL) : 
                        (COLD_URL) }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city }

                {info.humidity > 70 ? (
                            <ThunderstormIcon  />
                        ) : info.temp > 15? (
                            <WbSunnyIcon  />
                        ) : (
                            <AcUnitIcon  />
                        )}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature:{info.temp}&deg;C</p>
                        <p>Humidity:{info.humidity}</p>
                        <p>Min Temp:{info.tempMin ? info.tempMin: "Not"}&deg;C</p>feelsLike
                        <p>Max Temp:{info.temMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike ? `${info.feelsLike}°C` : "N/A"}</p>
                </Typography>
            </CardContent>

        </Card>
    </div>
  )
}
