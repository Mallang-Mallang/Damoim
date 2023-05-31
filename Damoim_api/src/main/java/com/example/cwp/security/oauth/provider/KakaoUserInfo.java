package com.example.cwp.security.oauth.provider;

import java.util.Map;

public class KakaoUserInfo implements OAuth2UserInfo{

    private Map<String, Object> attributes;

    public KakaoUserInfo(Map<String, Object> attributes) {

        this.attributes = attributes;
    }
    @Override
    public String getProviderId() {

        return  attributes.get("id").toString();
    }

    @Override
    public String getName() {
        Map<String, Object> info = (Map) attributes.get("properties");
        return (String) info.get("nickname");
    }

    @Override
    public String getPicture() {
        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> info = (Map<String, Object>) kakaoAccount.get("profile");
        return (String) info.get("profile_image_url");
    }

    @Override
    public String getEmail() {

        Map<String, Object> info = (Map) attributes.get("kakao_account");
        return (String) info.get("email");
    }

    @Override
    public String getProvider() {

        return "kakao";
    }
}
