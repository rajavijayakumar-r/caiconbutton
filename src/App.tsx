import React from 'react';
import { View } from 'react-native';
import CAIconButton from "./CAIconButton";
import { CAIconButtonStyle } from './style/caIconButton';

function App() {
  return (
    <div className="App">
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
      }}>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='default'
      type="cta"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='default'
      type="primary"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='default'
      type="secondary"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='default'
      type="negative"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='default'
      type="success"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'black', alignItems: "center", justifyContent: "center"}}>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='default'
      type="contrastCta"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      </View>
      <View style={{height: 10}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'black', alignItems: "center", justifyContent: "center"}}>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='default'
      type="contrastPrimary"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      </View>


      <View style={{height:40}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='active'
      type="cta"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='active'
      type="primary"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='active'
      type="secondary"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='active'
      type="negative"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='active'
      type="success"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'black', alignItems: "center", justifyContent: "center"}}>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='active'
      type="contrastCta"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      </View>
      <View style={{height: 10}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'black', alignItems: "center", justifyContent: "center"}}>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='active'
      type="contrastPrimary"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      </View>


      <View style={{height:40}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='disable'
      type="cta"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='disable'
      type="primary"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='disable'
      type="secondary"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='disable'
      type="negative"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='disable'
      type="success"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      <View style={{height: 10}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'black', alignItems: "center", justifyContent: "center"}}>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='disable'
      type="contrastCta"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      </View>
      <View style={{height: 10}}></View>
      <View style={{width: 100, height: 100, backgroundColor: 'black', alignItems: "center", justifyContent: "center"}}>
      <CAIconButton 
      theme={CAIconButtonStyle} 
      size='l'
      state='disable'
      type="contrastPrimary"
      callback={function (): void {
          console.log('Clicked!!!');
        } 
      } />
      </View>
      </View>
    </div>
  );
}

export default App;
