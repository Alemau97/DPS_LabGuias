/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { View, ScrollView, StyleSheet, Image } from 'react-native';
 import { Text, Card, Button, Icon } from '@rneui/themed';
 
const Cards = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>COMIDAS TÍPICAS SALVADOREÑAS</Text>
          <Card style={styles.card}>
            <Card.Title style={styles.cardTitle}>Pupusas</Card.Title>
            <Card.Image
              resizeMode='contain'
              style={{width: "auto", height: 175, borderRadius: 5, margin: 5}}
              source={{
                uri:
                  'https://cdn-pro.elsalvador.com/wp-content/uploads/2021/05/Las-pupusas-en-Valencia.jpg',
              }}
            />
            <Text style={styles.desc}>Descripción:</Text>
            <Text style={styles.paragraph} p>
              Las pupusas pueden ser hechas con masa o harina de maíz, poseen una gran variedad de ingredientes como queso, frijol con queso, revueltas,
              ayote, ajo, muchas más y hasta locas!!!
            </Text>
          </Card>
          <Card style={styles.card}>
            <Card.Title style={styles.cardTitle}>Empanadas</Card.Title>
            <Card.Image
              resizeMode='contain'
              style={{width: "auto", height: 175, borderRadius: 5, margin: 5}}
              source={{
                uri:
                  'https://www.recetassalvador.com/base/stock/Recipe/42-image/42-image_web.jpg',
              }}
            />
            <Text style={styles.desc}>Descripción:</Text>
            <Text style={styles.paragraph} p>
              Hechas con base de plátano molido y luego fritas, pueden ser de leche que es lo más común o bien de frijol, a su vez posee una cubierta de azúcar ajo
              preferencia del comensal.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Card.Title style={styles.cardTitle}>Elote loco</Card.Title>
            <Card.Image
              resizeMode='contain'
              style={{width: "auto", height: 175, borderRadius: 5, margin: 5}}
              source={{
                uri:
                  'https://www.recetashonduras.com/base/stock/Recipe/117-image/117-image_web.jpg',
              }}
            />
            <Text style={styles.desc}>Descripción:</Text>
            <Text style={styles.paragraph} p>
              Como su nombre lo indica, es un elote que es puesto a hervir para posteriormente insertarle un palo de madera para que adopte la forma como tal, se baña en
              queso rallado, mostaza, salsa negra y ketchup.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Card.Title style={styles.cardTitle}>Atol de elote</Card.Title>
            <Card.Image
              resizeMode='contain'
              style={{width: "auto", height: 175, borderRadius: 5, margin: 5}}
              source={{
                uri:
                  'https://img-global.cpcdn.com/recipes/47ba295e28520bb7/1200x630cq70/photo.jpg',
              }}
            />
            <Text style={styles.desc}>Descripción:</Text>
            <Text style={styles.paragraph} p>
              Atol hecho de elote, tiene una consistencia espesa, además puede desgranarse un elote y echarse dentro a gusto del comensal.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Card.Title style={styles.cardTitle}>Riguas</Card.Title>
            <Card.Image
              resizeMode='contain'
              style={{width: "auto", height: 175, borderRadius: 5, margin: 5}}
              source={{
                uri:
                  'https://www.recetassalvadorenas.com/wp-content/uploads/2014/06/riguas.jpg',
              }}
            />
            <Text style={styles.desc}>Descripción:</Text>
            <Text style={styles.paragraph} p>
              Que viva el elote! otra gran comida hecha a base de elote, simila una tortilla pero en este caso no es de maíz, puede ser dulce o salada, y si es salada,
              se puede acompañar de queso fresco.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Card.Title style={styles.cardTitle}>Tamales de elote, pollo, chipilín, gallina, azúcar</Card.Title>
            <Card.Image
              resizeMode='contain'
              style={{width: "auto", height: 175, borderRadius: 5, margin: 5}}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShrOnfCDJm2CNXr0Os0BlHPkt9oPnXmnebcQ&usqp=CAU',
              }}
            />
            <Text style={styles.desc}>Descripción:</Text>
            <Text style={styles.paragraph} p>
              En este caso tenemos variedad, tenemos tamales de gallina o pollo, que son hechos a base de masa y lleva la comida adentro. Tenemos los tamales de elote
              que su propio nombre nos indica de qué están hechos. Tenemos unas cuantas combinaciones exóticas de sabores como lo son los tamales de chipilín, chipilín con queso 
              y hasta de azúcar!!!.
            </Text>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

 const styles = StyleSheet.create({
 container: {
   display: "flex",
   flexDirection: "column",
   justifyContent: 'center',
   alignContent: "center",
   alignItems: "center",
   backgroundColor: "#00afc3"
 },
 titulo: {
  fontSize: 20,
  textAlign: 'center',
  padding: 10,
  fontWeight: 'bold',
  color: "#fff",
 },
 cardTitle: {
  fontSize: 20
 },
 desc: {
    padding: 5,
    textAlign: 'left',
    fontSize: 15,
    fontWeight: "bold",
    color: "red"
 },
 paragraph:{
    padding: 5,
    textAlign: 'justify',
    fontSize: 15,
    color: "black"
 }
 });
 
 export default Cards;