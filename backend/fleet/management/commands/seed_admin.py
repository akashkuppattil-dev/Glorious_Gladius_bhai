from django.core.management.base import BaseCommand

from fleet.models import User


class Command(BaseCommand):
    help = "Create default test users if they are missing."

    def handle(self, *args, **options):
        # Admin
        admin_email = "admin@glorious.com"
        if not User.objects.filter(email__iexact=admin_email).exists():
            User.objects.create_user(
                admin_email,
                email=admin_email,
                password="admin123",
                first_name="Admin",
                role=User.Role.ADMIN,
                is_staff=True,
                is_superuser=True,
            )
            self.stdout.write(self.style.SUCCESS(f"Created admin: {admin_email}"))

        # Driver
        driver_email = "driver1@glorious.com"
        if not User.objects.filter(email__iexact=driver_email).exists():
            User.objects.create_user(
                driver_email,
                email=driver_email,
                password="123456",
                first_name="Driver One",
                role=User.Role.DRIVER,
            )
            self.stdout.write(self.style.SUCCESS(f"Created driver: {driver_email}"))
