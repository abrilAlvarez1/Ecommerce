E-Commerce App 

Esta es una aplicación de comercio electrónico desarrollada con React Native que ofrece servicios de navegacion, compras con carrito, registro y autenticación de usuarios.

Funcionalidades Principales
Pantalla de Cuenta
Acceso seguro: El acceso de a la plataforma solo permite el ingreso de usuarios autenticados. 
![Captura de pantalla](assets/screenshot.png)
Categorías: Contamos con una tienda que nos permite filtrar y buscar productos por categorías.
Obtención de productos: Se cuenta con un carrito de compras, el cual nos permite agregar productos, y calcular el total.
Detalle de Producto: Contamos con una ventana de visualización de detalles del producto.
Generación de Ordenes: Contamos con un servicio de generación de ordenes que está vinculado a nuestro carrito, esta función nos permite generar ordenes de compras con los datos registrados en mi carro.


Firebase
La App utiliza Google Firebase para gestionar el alta, autenticación y  acceso de usuarios. Además se almacenan datos como imágenes, localización y direcciones.
El almacenamiento y consulta de productos, categorías y órdenes generadas a través del carrito.

Redux
Se utiliza redux para el manejo de estados globales, para la manipulación de datos de las ordenes, productos e informaciones de los usuarios.

Navegación
Se utiliza React Tab Navigation para la navegación por tabs entre pantallas y React Stack Navigatión para la navegación de stack dentro de una misma pantalla.


Navegación Inferior
        const TabNavigator = () => {
  return (
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar

          }}
        >
          <Tab.Screen
             name="ShopStack"
             component={ShopStack}
             options={{
              tabBarIcon:({focused}) => <TabIcon icon="shop" label="Productos" focused={focused}/>
             }}
          />
          <Tab.Screen 
              name="CartStack" 
              component={CartStack}
              options={{
                tabBarIcon:({focused}) =>  <TabIcon icon="shopping-cart" label="Carrito" focused={focused}/> 
              }}
             />
             <Tab.Screen 
              name="OrdersStack" 
              component={OrdersStack}
              options={{
                tabBarIcon:({focused}) => <TabIcon icon="list" label="Ordenes" focused={focused}/> 
              }}
             />
            <Tab.Screen 
              name="ProfileStack" 
              component={ProfileStack}
              options={{
                tabBarIcon:({focused}) => <TabIcon icon="user" label="Perfil" focused={focused}/> 
              }}
             />
      </Tab.Navigator>
  )
}

Pestaña 1 - Productos: Categorías y productos (stack principal).
Pestaña 2 - Carrito: Detalles del carrito de compras con resumen y botón para finalizar la orden.
Pestaña 3 - Órdenes: Historial de órdenes realizadas.
Pestaña 4 - Perfil: Información del usuario, ubicación y carga de imagen de perfil.


Tecnologías Utilizadas en el Proyecto

Firebase Authentication.
React Native Navigation Stack y Buttom tap.
Expo-Location.
Expo-Picker-Image.
Redux.
RTK Query y Firebase (gestion de bases de datos)

Utilizar la App

Clona el repositorio: git clone https://github
Instala las dependencias: npm install
Configura las claves de API para servicios externos (Expo-Location, Firebase, googleApi.).
Configura las credenciales de Firebase en tu proyecto.
Ejecuta la aplicación: npm start
