import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import React from 'react';
import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import BackToTop from '@/components/BackToTop';
import { Fab } from '@mui/material';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

export default function SectionIndex() {
  return (
    <Box sx={{ pb: 5, justifyContent: 'center', textAlign: 'center' }}>
      <div
        style={{
          alignContent: 'start',
          justifyContent: 'start',
          display: 'grid'
        }}
        id="back-to-top-anchor"
      >
        <Typography variant="h3" component="h2" sx={{ p: 2 }}>
          Indexes
        </Typography>
        <div style={{ borderLeft: '3px solid grey', marginLeft: '30px' }}>
          <Typography variant="h4" component="h3" sx={{ p: 2 }}>
            <AnchorLink offset="100" href="#index1">
              Index 1
            </AnchorLink>
          </Typography>
          <Typography variant="h4" component="h3" sx={{ p: 2 }}>
            <AnchorLink offset="100" href="#index2">
              Index 2
            </AnchorLink>
          </Typography>
          <Typography variant="h4" component="h3" sx={{ p: 2 }}>
            <AnchorLink offset="100" href="#index3">
              Index 3
            </AnchorLink>
          </Typography>
          <Typography variant="h4" component="h3" sx={{ p: 2 }}>
            <AnchorLink offset="100" href="#index4">
              Index 4
            </AnchorLink>
          </Typography>
        </div>
      </div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <section id="index1">
          <h2>Index 1</h2>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            risus nullam eget felis. Arcu risus quis varius quam quisque id diam
            vel. Diam ut venenatis tellus in metus vulputate eu. Mattis
            vulputate enim nulla aliquet. Volutpat lacus laoreet non curabitur
            gravida arcu ac tortor dignissim. Lorem ipsum dolor sit amet
            consectetur adipiscing. Lectus magna fringilla urna porttitor
            rhoncus dolor purus non. Egestas fringilla phasellus faucibus
            scelerisque. Bibendum ut tristique et egestas quis ipsum suspendisse
            ultrices gravida. Sit amet nisl suscipit adipiscing bibendum est. In
            ornare quam viverra orci sagittis. Neque vitae tempus quam
            pellentesque nec nam aliquam sem et. Proin nibh nisl condimentum id
            venenatis a condimentum. Maecenas pharetra convallis posuere morbi
            leo urna molestie.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Tortor aliquam nulla facilisi cras. Scelerisque varius morbi enim
            nunc faucibus a pellentesque. In metus vulputate eu scelerisque.
            Integer feugiat scelerisque varius morbi enim. Eu facilisis sed odio
            morbi quis. Dolor sed viverra ipsum nunc aliquet bibendum. Nisl nisi
            scelerisque eu ultrices vitae auctor eu augue ut. Bibendum arcu
            vitae elementum curabitur vitae. Volutpat odio facilisis mauris sit
            amet massa vitae tortor. A diam maecenas sed enim ut sem viverra
            aliquet eget. In mollis nunc sed id semper risus. Risus pretium quam
            vulputate dignissim suspendisse. Risus viverra adipiscing at in.
            Duis ut diam quam nulla. Sagittis purus sit amet volutpat consequat
            mauris nunc congue nisi. Urna et pharetra pharetra massa massa
            ultricies mi quis. Cras tincidunt lobortis feugiat vivamus at.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed.
            Potenti nullam ac tortor vitae purus faucibus ornare. Diam volutpat
            commodo sed egestas egestas fringilla. Sed vulputate odio ut enim
            blandit volutpat maecenas volutpat. Sed cras ornare arcu dui. Et
            odio pellentesque diam volutpat commodo sed. At erat pellentesque
            adipiscing commodo elit. Et malesuada fames ac turpis egestas
            integer eget aliquet. Egestas maecenas pharetra convallis posuere
            morbi leo urna molestie at. Turpis massa tincidunt dui ut ornare
            lectus sit amet. Aliquam sem fringilla ut morbi. Adipiscing commodo
            elit at imperdiet dui. Ut tortor pretium viverra suspendisse potenti
            nullam. Maecenas pharetra convallis posuere morbi leo urna molestie.
            Scelerisque eleifend donec pretium vulputate sapien nec sagittis
            aliquam malesuada. Id ornare arcu odio ut sem nulla.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Pretium quam vulputate dignissim suspendisse in est ante in nibh.
            Orci porta non pulvinar neque laoreet suspendisse interdum
            consectetur libero. Morbi tincidunt augue interdum velit euismod in
            pellentesque massa placerat. Purus in mollis nunc sed id semper
            risus in hendrerit. Vel fringilla est ullamcorper eget nulla
            facilisi etiam. Iaculis urna id volutpat lacus laoreet non curabitur
            gravida. Urna duis convallis convallis tellus id. Aliquet nec
            ullamcorper sit amet risus nullam eget felis eget. Bibendum enim
            facilisis gravida neque convallis a. At quis risus sed vulputate.
            Elementum pulvinar etiam non quam. Dui faucibus in ornare quam
            viverra. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.
            Sed sed risus pretium quam vulputate dignissim suspendisse in est.
            Amet consectetur adipiscing elit pellentesque habitant. Urna
            porttitor rhoncus dolor purus non enim praesent elementum facilisis.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mi
            ipsum faucibus vitae aliquet. Cursus mattis molestie a iaculis at
            erat pellentesque. Quam id leo in vitae turpis massa sed. Sit amet
            volutpat consequat mauris nunc. Egestas tellus rutrum tellus
            pellentesque. Sed sed risus pretium quam vulputate dignissim
            suspendisse in. Bibendum enim facilisis gravida neque convallis a
            cras. Sed enim ut sem viverra. Et ligula ullamcorper malesuada proin
            libero nunc consequat interdum varius. Blandit cursus risus at
            ultrices mi. Quis risus sed vulputate odio ut enim. Sem fringilla ut
            morbi tincidunt. Tempor orci eu lobortis elementum nibh tellus.
            Tempor orci dapibus ultrices in iaculis nunc sed. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Nisl pretium fusce
            id velit ut tortor pretium. Consectetur adipiscing elit ut aliquam.
            Placerat vestibulum lectus mauris ultrices eros in cursus.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Mi in nulla posuere sollicitudin. Eu volutpat odio facilisis mauris
            sit amet. Orci eu lobortis elementum nibh tellus molestie nunc.
            Mauris vitae ultricies leo integer malesuada. Enim neque volutpat ac
            tincidunt vitae semper quis. Lectus urna duis convallis convallis.
            Ac orci phasellus egestas tellus rutrum. Cras ornare arcu dui
            vivamus arcu felis. Porta lorem mollis aliquam ut porttitor leo a
            diam. Tellus in metus vulputate eu scelerisque felis imperdiet proin
            fermentum. Quam vulputate dignissim suspendisse in est.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Ipsum consequat nisl vel pretium lectus quam. Ac tincidunt vitae
            semper quis. Enim eu turpis egestas pretium aenean pharetra. Odio
            euismod lacinia at quis risus sed. Eros in cursus turpis massa
            tincidunt dui ut ornare. Donec massa sapien faucibus et. Vitae et
            leo duis ut diam. Viverra maecenas accumsan lacus vel facilisis
            volutpat est velit. Imperdiet massa tincidunt nunc pulvinar. Id
            porta nibh venenatis cras sed. Congue nisi vitae suscipit tellus
            mauris a.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Sollicitudin ac orci phasellus egestas. Libero id faucibus nisl
            tincidunt. Maecenas accumsan lacus vel facilisis volutpat est velit
            egestas. Elit scelerisque mauris pellentesque pulvinar pellentesque
            habitant morbi tristique senectus. At augue eget arcu dictum varius
            duis at consectetur lorem. Eu volutpat odio facilisis mauris sit
            amet massa. Mauris augue neque gravida in fermentum et sollicitudin
            ac orci. Senectus et netus et malesuada. Id ornare arcu odio ut sem
            nulla pharetra diam. Nunc sed velit dignissim sodales ut eu sem
            integer. Suspendisse sed nisi lacus sed. Diam sollicitudin tempor id
            eu nisl nunc. Mollis nunc sed id semper. Tellus mauris a diam
            maecenas sed enim ut sem. Sagittis id consectetur purus ut faucibus
            pulvinar. Volutpat diam ut venenatis tellus in metus. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
            Aenean et tortor at risus. Cum sociis natoque penatibus et.
          </p>
        </section>
        <section id="index2">
          <h2>Index 2</h2>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            risus nullam eget felis. Arcu risus quis varius quam quisque id diam
            vel. Diam ut venenatis tellus in metus vulputate eu. Mattis
            vulputate enim nulla aliquet. Volutpat lacus laoreet non curabitur
            gravida arcu ac tortor dignissim. Lorem ipsum dolor sit amet
            consectetur adipiscing. Lectus magna fringilla urna porttitor
            rhoncus dolor purus non. Egestas fringilla phasellus faucibus
            scelerisque. Bibendum ut tristique et egestas quis ipsum suspendisse
            ultrices gravida. Sit amet nisl suscipit adipiscing bibendum est. In
            ornare quam viverra orci sagittis. Neque vitae tempus quam
            pellentesque nec nam aliquam sem et. Proin nibh nisl condimentum id
            venenatis a condimentum. Maecenas pharetra convallis posuere morbi
            leo urna molestie.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Tortor aliquam nulla facilisi cras. Scelerisque varius morbi enim
            nunc faucibus a pellentesque. In metus vulputate eu scelerisque.
            Integer feugiat scelerisque varius morbi enim. Eu facilisis sed odio
            morbi quis. Dolor sed viverra ipsum nunc aliquet bibendum. Nisl nisi
            scelerisque eu ultrices vitae auctor eu augue ut. Bibendum arcu
            vitae elementum curabitur vitae. Volutpat odio facilisis mauris sit
            amet massa vitae tortor. A diam maecenas sed enim ut sem viverra
            aliquet eget. In mollis nunc sed id semper risus. Risus pretium quam
            vulputate dignissim suspendisse. Risus viverra adipiscing at in.
            Duis ut diam quam nulla. Sagittis purus sit amet volutpat consequat
            mauris nunc congue nisi. Urna et pharetra pharetra massa massa
            ultricies mi quis. Cras tincidunt lobortis feugiat vivamus at.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed.
            Potenti nullam ac tortor vitae purus faucibus ornare. Diam volutpat
            commodo sed egestas egestas fringilla. Sed vulputate odio ut enim
            blandit volutpat maecenas volutpat. Sed cras ornare arcu dui. Et
            odio pellentesque diam volutpat commodo sed. At erat pellentesque
            adipiscing commodo elit. Et malesuada fames ac turpis egestas
            integer eget aliquet. Egestas maecenas pharetra convallis posuere
            morbi leo urna molestie at. Turpis massa tincidunt dui ut ornare
            lectus sit amet. Aliquam sem fringilla ut morbi. Adipiscing commodo
            elit at imperdiet dui. Ut tortor pretium viverra suspendisse potenti
            nullam. Maecenas pharetra convallis posuere morbi leo urna molestie.
            Scelerisque eleifend donec pretium vulputate sapien nec sagittis
            aliquam malesuada. Id ornare arcu odio ut sem nulla.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Pretium quam vulputate dignissim suspendisse in est ante in nibh.
            Orci porta non pulvinar neque laoreet suspendisse interdum
            consectetur libero. Morbi tincidunt augue interdum velit euismod in
            pellentesque massa placerat. Purus in mollis nunc sed id semper
            risus in hendrerit. Vel fringilla est ullamcorper eget nulla
            facilisi etiam. Iaculis urna id volutpat lacus laoreet non curabitur
            gravida. Urna duis convallis convallis tellus id. Aliquet nec
            ullamcorper sit amet risus nullam eget felis eget. Bibendum enim
            facilisis gravida neque convallis a. At quis risus sed vulputate.
            Elementum pulvinar etiam non quam. Dui faucibus in ornare quam
            viverra. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.
            Sed sed risus pretium quam vulputate dignissim suspendisse in est.
            Amet consectetur adipiscing elit pellentesque habitant. Urna
            porttitor rhoncus dolor purus non enim praesent elementum facilisis.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mi
            ipsum faucibus vitae aliquet. Cursus mattis molestie a iaculis at
            erat pellentesque. Quam id leo in vitae turpis massa sed. Sit amet
            volutpat consequat mauris nunc. Egestas tellus rutrum tellus
            pellentesque. Sed sed risus pretium quam vulputate dignissim
            suspendisse in. Bibendum enim facilisis gravida neque convallis a
            cras. Sed enim ut sem viverra. Et ligula ullamcorper malesuada proin
            libero nunc consequat interdum varius. Blandit cursus risus at
            ultrices mi. Quis risus sed vulputate odio ut enim. Sem fringilla ut
            morbi tincidunt. Tempor orci eu lobortis elementum nibh tellus.
            Tempor orci dapibus ultrices in iaculis nunc sed. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Nisl pretium fusce
            id velit ut tortor pretium. Consectetur adipiscing elit ut aliquam.
            Placerat vestibulum lectus mauris ultrices eros in cursus.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Mi in nulla posuere sollicitudin. Eu volutpat odio facilisis mauris
            sit amet. Orci eu lobortis elementum nibh tellus molestie nunc.
            Mauris vitae ultricies leo integer malesuada. Enim neque volutpat ac
            tincidunt vitae semper quis. Lectus urna duis convallis convallis.
            Ac orci phasellus egestas tellus rutrum. Cras ornare arcu dui
            vivamus arcu felis. Porta lorem mollis aliquam ut porttitor leo a
            diam. Tellus in metus vulputate eu scelerisque felis imperdiet proin
            fermentum. Quam vulputate dignissim suspendisse in est.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Ipsum consequat nisl vel pretium lectus quam. Ac tincidunt vitae
            semper quis. Enim eu turpis egestas pretium aenean pharetra. Odio
            euismod lacinia at quis risus sed. Eros in cursus turpis massa
            tincidunt dui ut ornare. Donec massa sapien faucibus et. Vitae et
            leo duis ut diam. Viverra maecenas accumsan lacus vel facilisis
            volutpat est velit. Imperdiet massa tincidunt nunc pulvinar. Id
            porta nibh venenatis cras sed. Congue nisi vitae suscipit tellus
            mauris a.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Sollicitudin ac orci phasellus egestas. Libero id faucibus nisl
            tincidunt. Maecenas accumsan lacus vel facilisis volutpat est velit
            egestas. Elit scelerisque mauris pellentesque pulvinar pellentesque
            habitant morbi tristique senectus. At augue eget arcu dictum varius
            duis at consectetur lorem. Eu volutpat odio facilisis mauris sit
            amet massa. Mauris augue neque gravida in fermentum et sollicitudin
            ac orci. Senectus et netus et malesuada. Id ornare arcu odio ut sem
            nulla pharetra diam. Nunc sed velit dignissim sodales ut eu sem
            integer. Suspendisse sed nisi lacus sed. Diam sollicitudin tempor id
            eu nisl nunc. Mollis nunc sed id semper. Tellus mauris a diam
            maecenas sed enim ut sem. Sagittis id consectetur purus ut faucibus
            pulvinar. Volutpat diam ut venenatis tellus in metus. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
            Aenean et tortor at risus. Cum sociis natoque penatibus et.
          </p>
        </section>
        <section id="index3">
          <h2>Index 3</h2>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            risus nullam eget felis. Arcu risus quis varius quam quisque id diam
            vel. Diam ut venenatis tellus in metus vulputate eu. Mattis
            vulputate enim nulla aliquet. Volutpat lacus laoreet non curabitur
            gravida arcu ac tortor dignissim. Lorem ipsum dolor sit amet
            consectetur adipiscing. Lectus magna fringilla urna porttitor
            rhoncus dolor purus non. Egestas fringilla phasellus faucibus
            scelerisque. Bibendum ut tristique et egestas quis ipsum suspendisse
            ultrices gravida. Sit amet nisl suscipit adipiscing bibendum est. In
            ornare quam viverra orci sagittis. Neque vitae tempus quam
            pellentesque nec nam aliquam sem et. Proin nibh nisl condimentum id
            venenatis a condimentum. Maecenas pharetra convallis posuere morbi
            leo urna molestie.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Tortor aliquam nulla facilisi cras. Scelerisque varius morbi enim
            nunc faucibus a pellentesque. In metus vulputate eu scelerisque.
            Integer feugiat scelerisque varius morbi enim. Eu facilisis sed odio
            morbi quis. Dolor sed viverra ipsum nunc aliquet bibendum. Nisl nisi
            scelerisque eu ultrices vitae auctor eu augue ut. Bibendum arcu
            vitae elementum curabitur vitae. Volutpat odio facilisis mauris sit
            amet massa vitae tortor. A diam maecenas sed enim ut sem viverra
            aliquet eget. In mollis nunc sed id semper risus. Risus pretium quam
            vulputate dignissim suspendisse. Risus viverra adipiscing at in.
            Duis ut diam quam nulla. Sagittis purus sit amet volutpat consequat
            mauris nunc congue nisi. Urna et pharetra pharetra massa massa
            ultricies mi quis. Cras tincidunt lobortis feugiat vivamus at.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed.
            Potenti nullam ac tortor vitae purus faucibus ornare. Diam volutpat
            commodo sed egestas egestas fringilla. Sed vulputate odio ut enim
            blandit volutpat maecenas volutpat. Sed cras ornare arcu dui. Et
            odio pellentesque diam volutpat commodo sed. At erat pellentesque
            adipiscing commodo elit. Et malesuada fames ac turpis egestas
            integer eget aliquet. Egestas maecenas pharetra convallis posuere
            morbi leo urna molestie at. Turpis massa tincidunt dui ut ornare
            lectus sit amet. Aliquam sem fringilla ut morbi. Adipiscing commodo
            elit at imperdiet dui. Ut tortor pretium viverra suspendisse potenti
            nullam. Maecenas pharetra convallis posuere morbi leo urna molestie.
            Scelerisque eleifend donec pretium vulputate sapien nec sagittis
            aliquam malesuada. Id ornare arcu odio ut sem nulla.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Pretium quam vulputate dignissim suspendisse in est ante in nibh.
            Orci porta non pulvinar neque laoreet suspendisse interdum
            consectetur libero. Morbi tincidunt augue interdum velit euismod in
            pellentesque massa placerat. Purus in mollis nunc sed id semper
            risus in hendrerit. Vel fringilla est ullamcorper eget nulla
            facilisi etiam. Iaculis urna id volutpat lacus laoreet non curabitur
            gravida. Urna duis convallis convallis tellus id. Aliquet nec
            ullamcorper sit amet risus nullam eget felis eget. Bibendum enim
            facilisis gravida neque convallis a. At quis risus sed vulputate.
            Elementum pulvinar etiam non quam. Dui faucibus in ornare quam
            viverra. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.
            Sed sed risus pretium quam vulputate dignissim suspendisse in est.
            Amet consectetur adipiscing elit pellentesque habitant. Urna
            porttitor rhoncus dolor purus non enim praesent elementum facilisis.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mi
            ipsum faucibus vitae aliquet. Cursus mattis molestie a iaculis at
            erat pellentesque. Quam id leo in vitae turpis massa sed. Sit amet
            volutpat consequat mauris nunc. Egestas tellus rutrum tellus
            pellentesque. Sed sed risus pretium quam vulputate dignissim
            suspendisse in. Bibendum enim facilisis gravida neque convallis a
            cras. Sed enim ut sem viverra. Et ligula ullamcorper malesuada proin
            libero nunc consequat interdum varius. Blandit cursus risus at
            ultrices mi. Quis risus sed vulputate odio ut enim. Sem fringilla ut
            morbi tincidunt. Tempor orci eu lobortis elementum nibh tellus.
            Tempor orci dapibus ultrices in iaculis nunc sed. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Nisl pretium fusce
            id velit ut tortor pretium. Consectetur adipiscing elit ut aliquam.
            Placerat vestibulum lectus mauris ultrices eros in cursus.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Mi in nulla posuere sollicitudin. Eu volutpat odio facilisis mauris
            sit amet. Orci eu lobortis elementum nibh tellus molestie nunc.
            Mauris vitae ultricies leo integer malesuada. Enim neque volutpat ac
            tincidunt vitae semper quis. Lectus urna duis convallis convallis.
            Ac orci phasellus egestas tellus rutrum. Cras ornare arcu dui
            vivamus arcu felis. Porta lorem mollis aliquam ut porttitor leo a
            diam. Tellus in metus vulputate eu scelerisque felis imperdiet proin
            fermentum. Quam vulputate dignissim suspendisse in est.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Ipsum consequat nisl vel pretium lectus quam. Ac tincidunt vitae
            semper quis. Enim eu turpis egestas pretium aenean pharetra. Odio
            euismod lacinia at quis risus sed. Eros in cursus turpis massa
            tincidunt dui ut ornare. Donec massa sapien faucibus et. Vitae et
            leo duis ut diam. Viverra maecenas accumsan lacus vel facilisis
            volutpat est velit. Imperdiet massa tincidunt nunc pulvinar. Id
            porta nibh venenatis cras sed. Congue nisi vitae suscipit tellus
            mauris a.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Sollicitudin ac orci phasellus egestas. Libero id faucibus nisl
            tincidunt. Maecenas accumsan lacus vel facilisis volutpat est velit
            egestas. Elit scelerisque mauris pellentesque pulvinar pellentesque
            habitant morbi tristique senectus. At augue eget arcu dictum varius
            duis at consectetur lorem. Eu volutpat odio facilisis mauris sit
            amet massa. Mauris augue neque gravida in fermentum et sollicitudin
            ac orci. Senectus et netus et malesuada. Id ornare arcu odio ut sem
            nulla pharetra diam. Nunc sed velit dignissim sodales ut eu sem
            integer. Suspendisse sed nisi lacus sed. Diam sollicitudin tempor id
            eu nisl nunc. Mollis nunc sed id semper. Tellus mauris a diam
            maecenas sed enim ut sem. Sagittis id consectetur purus ut faucibus
            pulvinar. Volutpat diam ut venenatis tellus in metus. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
            Aenean et tortor at risus. Cum sociis natoque penatibus et.
          </p>
        </section>
        <section id="index4">
          <h2>Index 4</h2>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            risus nullam eget felis. Arcu risus quis varius quam quisque id diam
            vel. Diam ut venenatis tellus in metus vulputate eu. Mattis
            vulputate enim nulla aliquet. Volutpat lacus laoreet non curabitur
            gravida arcu ac tortor dignissim. Lorem ipsum dolor sit amet
            consectetur adipiscing. Lectus magna fringilla urna porttitor
            rhoncus dolor purus non. Egestas fringilla phasellus faucibus
            scelerisque. Bibendum ut tristique et egestas quis ipsum suspendisse
            ultrices gravida. Sit amet nisl suscipit adipiscing bibendum est. In
            ornare quam viverra orci sagittis. Neque vitae tempus quam
            pellentesque nec nam aliquam sem et. Proin nibh nisl condimentum id
            venenatis a condimentum. Maecenas pharetra convallis posuere morbi
            leo urna molestie.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Tortor aliquam nulla facilisi cras. Scelerisque varius morbi enim
            nunc faucibus a pellentesque. In metus vulputate eu scelerisque.
            Integer feugiat scelerisque varius morbi enim. Eu facilisis sed odio
            morbi quis. Dolor sed viverra ipsum nunc aliquet bibendum. Nisl nisi
            scelerisque eu ultrices vitae auctor eu augue ut. Bibendum arcu
            vitae elementum curabitur vitae. Volutpat odio facilisis mauris sit
            amet massa vitae tortor. A diam maecenas sed enim ut sem viverra
            aliquet eget. In mollis nunc sed id semper risus. Risus pretium quam
            vulputate dignissim suspendisse. Risus viverra adipiscing at in.
            Duis ut diam quam nulla. Sagittis purus sit amet volutpat consequat
            mauris nunc congue nisi. Urna et pharetra pharetra massa massa
            ultricies mi quis. Cras tincidunt lobortis feugiat vivamus at.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed.
            Potenti nullam ac tortor vitae purus faucibus ornare. Diam volutpat
            commodo sed egestas egestas fringilla. Sed vulputate odio ut enim
            blandit volutpat maecenas volutpat. Sed cras ornare arcu dui. Et
            odio pellentesque diam volutpat commodo sed. At erat pellentesque
            adipiscing commodo elit. Et malesuada fames ac turpis egestas
            integer eget aliquet. Egestas maecenas pharetra convallis posuere
            morbi leo urna molestie at. Turpis massa tincidunt dui ut ornare
            lectus sit amet. Aliquam sem fringilla ut morbi. Adipiscing commodo
            elit at imperdiet dui. Ut tortor pretium viverra suspendisse potenti
            nullam. Maecenas pharetra convallis posuere morbi leo urna molestie.
            Scelerisque eleifend donec pretium vulputate sapien nec sagittis
            aliquam malesuada. Id ornare arcu odio ut sem nulla.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Pretium quam vulputate dignissim suspendisse in est ante in nibh.
            Orci porta non pulvinar neque laoreet suspendisse interdum
            consectetur libero. Morbi tincidunt augue interdum velit euismod in
            pellentesque massa placerat. Purus in mollis nunc sed id semper
            risus in hendrerit. Vel fringilla est ullamcorper eget nulla
            facilisi etiam. Iaculis urna id volutpat lacus laoreet non curabitur
            gravida. Urna duis convallis convallis tellus id. Aliquet nec
            ullamcorper sit amet risus nullam eget felis eget. Bibendum enim
            facilisis gravida neque convallis a. At quis risus sed vulputate.
            Elementum pulvinar etiam non quam. Dui faucibus in ornare quam
            viverra. Eu feugiat pretium nibh ipsum consequat nisl vel pretium.
            Sed sed risus pretium quam vulputate dignissim suspendisse in est.
            Amet consectetur adipiscing elit pellentesque habitant. Urna
            porttitor rhoncus dolor purus non enim praesent elementum facilisis.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Mi
            ipsum faucibus vitae aliquet. Cursus mattis molestie a iaculis at
            erat pellentesque. Quam id leo in vitae turpis massa sed. Sit amet
            volutpat consequat mauris nunc. Egestas tellus rutrum tellus
            pellentesque. Sed sed risus pretium quam vulputate dignissim
            suspendisse in. Bibendum enim facilisis gravida neque convallis a
            cras. Sed enim ut sem viverra. Et ligula ullamcorper malesuada proin
            libero nunc consequat interdum varius. Blandit cursus risus at
            ultrices mi. Quis risus sed vulputate odio ut enim. Sem fringilla ut
            morbi tincidunt. Tempor orci eu lobortis elementum nibh tellus.
            Tempor orci dapibus ultrices in iaculis nunc sed. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Nisl pretium fusce
            id velit ut tortor pretium. Consectetur adipiscing elit ut aliquam.
            Placerat vestibulum lectus mauris ultrices eros in cursus.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Mi in nulla posuere sollicitudin. Eu volutpat odio facilisis mauris
            sit amet. Orci eu lobortis elementum nibh tellus molestie nunc.
            Mauris vitae ultricies leo integer malesuada. Enim neque volutpat ac
            tincidunt vitae semper quis. Lectus urna duis convallis convallis.
            Ac orci phasellus egestas tellus rutrum. Cras ornare arcu dui
            vivamus arcu felis. Porta lorem mollis aliquam ut porttitor leo a
            diam. Tellus in metus vulputate eu scelerisque felis imperdiet proin
            fermentum. Quam vulputate dignissim suspendisse in est.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Ipsum consequat nisl vel pretium lectus quam. Ac tincidunt vitae
            semper quis. Enim eu turpis egestas pretium aenean pharetra. Odio
            euismod lacinia at quis risus sed. Eros in cursus turpis massa
            tincidunt dui ut ornare. Donec massa sapien faucibus et. Vitae et
            leo duis ut diam. Viverra maecenas accumsan lacus vel facilisis
            volutpat est velit. Imperdiet massa tincidunt nunc pulvinar. Id
            porta nibh venenatis cras sed. Congue nisi vitae suscipit tellus
            mauris a.
          </p>
          <p style={{ textAlign: 'start', margin: '20px' }}>
            Sollicitudin ac orci phasellus egestas. Libero id faucibus nisl
            tincidunt. Maecenas accumsan lacus vel facilisis volutpat est velit
            egestas. Elit scelerisque mauris pellentesque pulvinar pellentesque
            habitant morbi tristique senectus. At augue eget arcu dictum varius
            duis at consectetur lorem. Eu volutpat odio facilisis mauris sit
            amet massa. Mauris augue neque gravida in fermentum et sollicitudin
            ac orci. Senectus et netus et malesuada. Id ornare arcu odio ut sem
            nulla pharetra diam. Nunc sed velit dignissim sodales ut eu sem
            integer. Suspendisse sed nisi lacus sed. Diam sollicitudin tempor id
            eu nisl nunc. Mollis nunc sed id semper. Tellus mauris a diam
            maecenas sed enim ut sem. Sagittis id consectetur purus ut faucibus
            pulvinar. Volutpat diam ut venenatis tellus in metus. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
            Aenean et tortor at risus. Cum sociis natoque penatibus et.
          </p>
        </section>
      </Stack>
      <BackToTop>
        <Fab
          color="primary"
          aria-label="scroll back to top"
          style={{ marginBottom: '100px' }}
        >
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </Box>
  );
}
