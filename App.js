import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  ddu(){
    alert('party song will be player')
  }
  hylt(){
    alert('HOW YOU LIKE THAT will be played')
  }
  lthm(){
    alert('LOVE TO HATE ME will be played')
  }
  pwf(){
    alert('PLAYING WITH FIRE will be played')
  }
  ps(){
    alert('PRETTY SAVAGE will be played')
  }
  w(){
    alert('WHISTLE will be played')
  }
  fy(){
    alert('FOREVER YOUNG will be played')
  }
  render(){
    return(
        <View style={{backgroundColor: "black",}}>

        <Text style={{color: "pink", margin: "auto", marginTop: "10px", marginBottom: "10px", fontSize: "42px", fontWeight: "bold", border: "5px solid pink", padding: "5px"}}>dj mixer audio</Text>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "pink" title="DDU-DU DDU-DU" onPress = {this.ddu}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "pink" title="forever young" onPress = {this.fy}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "pink" title="How you like that" onPress = {this.hylt}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "pink" title="Love to hate me" onPress = {this.lthm}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "pink" title="Playing with fire" onPress = {this.pwf}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "pink" title="Pretty Savage" onPress = {this.ps}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "pink" title="whistle" onPress = {this.w}/>
        </View>

        </View>
    );
  }
}