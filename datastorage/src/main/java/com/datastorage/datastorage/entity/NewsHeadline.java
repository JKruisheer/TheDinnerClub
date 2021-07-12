package com.datastorage.datastorage.entity;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "news_headlines")
public class NewsHeadline {

    public NewsHeadline() {
    }

    public NewsHeadline(String headerDetails, Timestamp timePosted, String author, String newsWebsiteId) {
        this.headerDetails = headerDetails;
        this.timePosted = timePosted;
        this.author = author;
        this.newsWebsiteId = newsWebsiteId;
    }

    @Column(name = "header_id")
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long headerId;

    @Column(name = "header_details")
    private String headerDetails;

    @Column(name = "header_time_posted")
    private Timestamp timePosted;

    @Column(name = "header_author")
    private String author;

    @Column(name = "header_news_website_id")
    private String newsWebsiteId;

    @OneToOne(fetch = FetchType.LAZY,
            cascade =  CascadeType.ALL,
            mappedBy = "newsHeadline")
    private NewsDetails newsDetails;

    public Long getHeaderId() {
        return headerId;
    }

    public void setHeaderId(Long headerId) {
        this.headerId = headerId;
    }

    public String getHeaderDetails() {
        return headerDetails;
    }

    public void setHeaderDetails(String headerDetails) {
        this.headerDetails = headerDetails;
    }

    public Timestamp getTimePosted() {
        return timePosted;
    }

    public void setTimePosted(Timestamp timePosted) {
        this.timePosted = timePosted;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getNewsWebsiteId() {
        return newsWebsiteId;
    }

    public void setNewsWebsiteId(String newsWebsiteId) {
        this.newsWebsiteId = newsWebsiteId;
    }

    public NewsDetails getNewsDetails() {
        return newsDetails;
    }

    public void setNewsDetails(NewsDetails newsDetails) {
        this.newsDetails = newsDetails;
    }

    @Override
    public String toString() {
        return "NewsHeadlinesEntity{" +
                "headerId=" + headerId +
                ", headerDetails='" + headerDetails + '\'' +
                ", timePosted=" + timePosted +
                ", author='" + author + '\'' +
                ", newsWebsiteId='" + newsWebsiteId + '\'' +
                '}';
    }
}
