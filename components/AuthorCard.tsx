import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Github, Mail, Instagram } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface AuthorCardProps {
  name: string;
  bio: string;
  avatar: string;
  social?: {
    email?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export default function HorizontalAuthorCard({ name, bio, avatar, social }: AuthorCardProps) {
  return (
    <Card className="w-full max-w-xl mx-auto group">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 sm:p-6">
        
        {/* Avatar */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-blue-500 group-hover:ring-4 transition-all duration-300 flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col justify-center gap-2">
          <CardTitle className="text-lg sm:text-xl font-semibold">{name}</CardTitle>
          <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            {bio}
          </CardDescription>

          {/* Social Icons */}
          {social && (
            <CardFooter className="flex gap-3 mt-2">
              {social.email && (
                <Link
                  href={`mailto:${social.email}`}
                  className="text-red-500 hover:text-red-600"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              )}
              {social.twitter && (
                <Link
                  href={social.twitter}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-600"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
              )}
              {social.linkedin && (
                <Link
                  href={social.linkedin}
                  target="_blank"
                  className="text-blue-700 hover:text-blue-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              )}
              {social.github && (
                <Link
                  href={social.github}
                  target="_blank"
                  className="text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white"
                  aria-label="Github"
                >
                  <Github className="w-5 h-5" />
                </Link>
              )}
              {social.instagram && (
                <Link
                  href={social.instagram}
                  target="_blank"
                  className="text-pink-500 hover:text-pink-600"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              )}
            </CardFooter>
          )}
        </div>
      </div>
    </Card>
  );
}
