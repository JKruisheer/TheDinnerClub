package com.datastorage.datastorage.entity;

import javax.persistence.*;

@Entity
@Table(name = "news_details")
public class NewsDetails {

    public NewsDetails(){

    }

    public NewsDetails(String newsDetails) {
        this.newsDetails = newsDetails;
    }

    @Column(name = "news_id")
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long newsId;
    @Column(name = "news_details")
    private String newsDetails;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "news_header_id", nullable = false)
    private NewsHeadline newsHeadline;

    public Long getNewsId() {
        return newsId;
    }

    public void setNewsId(Long newsId) {
        this.newsId = newsId;
    }

    public String getNewsDetails() {
        return newsDetails;
    }

    public void setNewsDetails(String newsDetails) {
        this.newsDetails = newsDetails;
    }

    public NewsHeadline getNewsHeadline() {
        return newsHeadline;
    }

    public void setNewsHeadline(NewsHeadline newsHeadline) {
        this.newsHeadline = newsHeadline;
    }
}
