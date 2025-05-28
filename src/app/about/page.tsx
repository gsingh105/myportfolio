"use client";
import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  SmartImage,
  Tag,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { person, about, social } from "@/app/resources/content";

// Contact Modal Component
const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#f0f0f0',
          borderRadius: '12px',
          padding: '32px',
          width: '100%',
          maxWidth: '500px',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          border: '1px solid var(--border-neutral-medium)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <IconButton
          icon="close"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px'
          }}
          variant="ghost"
        />
        
        {/* Form Header */}
        <Heading variant="display-strong-m" marginBottom="m">
          Get In Touch
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="xl">
          Ready to work together? Send me a message and I'll get back to you soon.
        </Text>

        {/* Contact Form */}
        <form 
  action="https://formsubmit.co/gurwindersinghvlogs@gmail.com" 
  method="POST"
  style={{ width: '100%', backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '12px' }}
>
  <Column gap="l">
    <Column gap="s">
      <Text variant="body-strong-m" style={{ color: 'black' }}>Name</Text>
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        required 
        style={{
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: '#ffffff',
          fontSize: '16px',
          width: '100%',
          boxSizing: 'border-box',
          color: '#333',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
        }}
      />
    </Column>
    
    <Column gap="s">
      <Text variant="body-strong-m" style={{ color: '#333' }}>Email</Text>
      <input 
        type="email" 
        name="email" 
        placeholder="your.email@example.com" 
        required 
        style={{
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: '#ffffff',
          fontSize: '16px',
          width: '100%',
          boxSizing: 'border-box',
          color: '#333',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
        }}
      />
    </Column>
    
    <Column gap="s">
      <Text variant="body-strong-m" style={{ color: '#333' }}>Message</Text>
      <textarea 
        name="message" 
        placeholder="Type you message..." 
        required 
        rows={6}
        style={{
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: '#ffffff',
          fontSize: '16px',
          width: '100%',
          boxSizing: 'border-box',
          resize: 'vertical',
          fontFamily: 'inherit',
          color: '#333',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
        }}
      />
    </Column>

    {/* Hidden fields for FormSubmit */}
    <input type="hidden" name="_subject" value="New contact form submission!" />
    <input type="hidden" name="_captcha" value="false" />
    
    <Flex gap="m" horizontal="end" marginTop="l">
      <Button 
        variant="secondary" 
        label="Cancel" 
        onClick={onClose}
        type="button"
      />
      <Button 
        variant="primary" 
        label="Send Message" 
        suffixIcon="send"
        type="submit"
      />
    </Flex>
  </Column>
</form>
      </div>
    </div>
  );
};

export default function About() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m">
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="location" />
               Batala, Punjab
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                <br/>
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                  cursor: "pointer"
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                onClick={() => setIsContactModalOpen(true)}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Hire Me</Flex>
                <IconButton
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            {/* <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            /> */}
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            {/* <SmartImage
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            /> */}
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
  );
}