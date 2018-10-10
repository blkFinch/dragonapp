
# Base our imagae on an official, minimal image of our preferred Ruby
FROM ruby:2.3.1-slim

# Install essential Linux packages
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev postgresql-client nodejs \
&& apt-get install -y curl

RUN apt-get install imagemagick -y &&\
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get --yes update && \
    apt-get --yes --no-install-recommends --no-install-suggests install texlive \
    texlive-lang-english texlive-latex-base texlive-latex-recommended ca-certificates \
    texlive-latex-extra ghostscript libmemcached-dev mongodb-clients imagemagick build-essential \
    libmariadbd-dev mariadb-client libc-dev \
    nodejs yarn && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


# Define where our application will live inside the image
ENV RAILS_ROOT /var/www/dragons

#add node
# Create application home. App server will need the pids dir so just create everything in one shot
RUN mkdir -p $RAILS_ROOT/tmp/pids

# Set our working directory inside the image
WORKDIR $RAILS_ROOT

# Use the Gemfiles as Docker cache markers. Always bundle before copying app src.
# (the src likely changed and we don't want to invalidate Docker's cache too early)
# http://ilikestuffblog.com/2014/01/06/how-to-skip-bundle-install-when-deploying-a-rails-app-to-docker/
COPY Gemfile Gemfile

COPY Gemfile.lock Gemfile.lock

# Prevent bundler warnings; ensure that the bundler version executed is >= that which created Gemfile.lock
RUN gem install bundler

# Finish establishing our Ruby enviornment
RUN bundle install


# Copy the Rails application into place
COPY . .

# Define the script we want run once the container boots
# Use the "exec" form of CMD so our script shuts down gracefully on SIGTERM (i.e. `docker stop`)
CMD [ "bin/run.sh" ]