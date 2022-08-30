import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
// import { Dirs } from "react-native-file-access";
// import { CachedImage, CacheManager } from "@georstat/react-native-image-cache";

import {
  ImageGallery,
  ImageObject,
} from "@georstat/react-native-image-gallery";
// import { images } from "./helpers";
// import Header from "./Header";
// import Footer from "./Footer";

// CacheManager.config = {
//   baseDir: `${Dirs.CacheDir}/images_cache/`,
//   blurRadius: 15,
//   sourceAnimationDuration: 1000,
//   thumbnailAnimationDuration: 1000,
// };

const App = () => {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1630149462161-2fe69fa964ee?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1630149462177-35a341b42fcf?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      thumbUrl: "",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      thumbUrl: "",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1630042166175-0ebcd586fab9?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      thumbUrl: "",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1629994562870-75d504fc02a1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      thumbUrl: "",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1630157051334-e302a5fe8947?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      thumbUrl: "",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      thumbUrl: "",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomGalleryOpen, setIsCustomGalleryOpen] = useState(false);

  const openGallery = () => setIsOpen(true);
  const openCustomGallery = () => setIsCustomGalleryOpen(true);

  const closeGallery = () => setIsOpen(false);
  const closeCustomGallery = () => setIsCustomGalleryOpen(false);

  const renderCustomImage = (image: ImageObject) => {
    return (
      <View style={styles.customImageContainer}>
        {/*<CachedImage*/}
        {/*  resizeMode="cover"*/}
        {/*  source={image.url}*/}
        {/*  style={styles.customImage}*/}
        {/*  thumbnailSource="https://via.placeholder.com/350x150"*/}
        {/*/>*/}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen}>
        <Button onPress={openGallery} title="Open Gallery" />
        <Button onPress={openCustomGallery} title="Open Custom Gallery" />
        <ImageGallery
          close={closeGallery}
          images={images}
          isOpen={isOpen}
          resizeMode="contain"
        />
        <ImageGallery
          close={closeCustomGallery}
          hideThumbs
          images={images}
          isOpen={isCustomGalleryOpen}
          renderCustomImage={renderCustomImage}
          // renderFooterComponent={renderFooterComponent}
          // renderHeaderComponent={renderHeaderComponent}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  customImageContainer: {
    alignItems: "center",
    borderRadius: 11,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 24,
    width: "100%",
  },
  customImage: {
    borderColor: "green",
    borderRadius: 250,
    borderWidth: 3,
    height: 300,
    overflow: "hidden",
    width: 300,
  },
});

export default App;
